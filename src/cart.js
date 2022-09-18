let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let carticon = document.getElementById("carticon");
  carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || {};
        let {img,name,price,} = search;
        return `
            <div class="cart-item">
            <img width="100" src="${img}" alt="" />
            <div class="details">
            <div class="title-price-x">
            <h4 class="title-price">${name}
            <p class="cart-item-price">$ ${price}</p>
            </h4>
            <i onclick="removeitem(${id})" class="bi bi-x-lg"></i>
            </div>
            
            <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i  onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>

            <h3>$ ${item * search.price}</h3>
            </div>
            </div>
            `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;

    label.innerHTML = `
        <h2>cart is empty</h2>
        <a href="shop.html">
        <button class= "homebtn">back to home</button>
        </a>
        `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    search.item += 1;
  }
  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) {
    return;
  } else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeitem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let {id,item}=x;
      let search = shopItemsData.find((y) => y.id === id) || {};
      return item*search.price;
    }).reduce((x,y)=>x+y,0);
    label.innerHTML=`
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout">checkout</button>
    <button onclick="clearcart()" class="removeall">Clear Cart</button>
    
    `
  } else return;
};

let clearcart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));

}

TotalAmount();
