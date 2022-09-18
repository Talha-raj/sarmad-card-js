// string

let name = "sarmad";
// console.log(`hello ${name}!`);

// objects

// let assets =  {name:prompt("name please ") , profession: prompt("enter profession"), wealth:prompt("enter money")};
// console.log(assets);

// arrays is also an object;

// const date = new Date();
// console.log(date);


// falsy values 
/*
NaN
null
undefined
''
0
*/

// console.log('' || null || 1);
// console.log(0 && 'truth' && 1);

// switch statements

// const imdb = 'sarmad';
// switch (imdb){
//     case 'munneeb':
//         console.log("welcome munneeb");
//     break;
//     case 'sadia' :
//         console.log("welcome sadia ");
//     break;
//     default:
//         console.log("you are sarmad ");
// }


// looping in JS

// let win = 0;
// while(win<10){
//     console.log(win);
//     win++;
// }

// for(let i=0; i<=15;i++){
//     console.log(i);
// }

// functions

// declaring the functions
// function men(lol){
//     return `hello ${lol}`;
// }
// men('sarmad');


// closures 


// const first = ()=>{
//     const hobby = 'footbal';
//     const second = () =>{
//     console.log(hobby);
//     }
//    return  second;
// }
// const myFun = first();
// myFun();


// const outer = () => {
//     const outerVar  = 'wassup';
//     const inner = () =>{
//         const innerVar = 'buddy';
//          console.log(outerVar,innerVar);   
//     }
//     return inner;
// }
// const fun = outer();
// fun();

const animal = '  dog cat   ';
// console.log(animal.includes('d'));

// console.log(animal.slice(0,2)); /we can use something in the string

// console.log(animal.split("").reverse().join('')); /*rever acts on arrays

// console.log(animal.repeat(10));

// console.log(animal.trim()); /*remove the empty spaces

// exercise 

// const guest = 'our guests are : sarmad, muneeb, naju, vicky';

// console.log(guest.toUpperCase());

// array-Methods

// const code = ['sarmad', 'aun ' , 'hassan' , 'bilal'];

// code.push('umar'); //add the new value to the end of array;

// const pished = code.pop();
// console.log(pished);
/* deletes the last value of an array*/;

// code.shift();
// console.log(code);
//deletes the first elements of an array//

// code.unshift('farhan');
// console.log(code);
// console.log(code.length);

// splice is use to add or remove elements from the array (index no ,to remove , add elements name  );

// forEach

// let div = 0;
// const numbers = [89,890774,5357];

// numbers.forEach((number)=>{
//     div /=number
// })


// shallow clonning 
const person ={name:'sarmad',car:{color:'blue',brand:'bmw'} }

// const newPerson = {...person,car:{...person.car.brand}};
// person.name='muneeb';
// newPerson.car.brand='green';
// console.log(newPerson);
// console.log(person);

// deep clonning 

// const newPerson = JSON.parse(JSON.stringify(person));
// newPerson.car.color = 'orange';
// console.log(newPerson);


// this keyword 

// function car (color, brand, model){
//     this.model=model;
//     this.color=color;
//     this.brand=brand;

//     console.log(this);
// }

// const result = new car('blue','bmw' ,2019);

// class components an schema for the objects for many values

// let create an object which store many values 

// class mens {
//     constructor(name,age,height){
//         this.name = name;
//         this.age =age;
//         this.height = height;
//     }
// }
// const dynmen = new mens ('sarmad' , 20 ,true);
// const dynmen = new mens ('muneeb' , 8 ,false);
// console.log(dynmen);


// const createPerson = (name,age,working) => {
//     const userschrma = {
//         name,
//         age,
//         working,
//     }
//     return userschrma;
// }
// const user = createPerson('satmad',20,true);
// const user = createPerson('log',12,true);
// console.log(user);

//  hey this is our arrays methods 

// map method
// const inventory = [{price:56,item:'shirts'},
//                    {price:53,item:'hats'},
//                    {price:45,item:'shoes'},
//                    {price:676,item:'jackets'}];

// const values  = inventory.map((item)=>item.price);
// const item  = inventory.map((item)=>item.item);
// console.log(values);
// console.log(item);


// array fillter

// const numbers = [-60,7,9895,0,-676];
// const positive = numbers.filter((number)=>number>=0)
// console.log(positive);

// const employeeData = [{name:'sarmad' ,overtime: 2},{name:'waqas' ,overtime: 12},{name:'faisal' ,overtime:7 },{name:'none' ,overtime: 1}];
// const rewardCandidate = employeeData.filter((employee)=>employee.overtime>=3);
// // console.log(rewardCandidate);
// const employeeName = rewardCandidate.map((employee)=>employee.name);
// // console.log(employeeName);
// employeeName.forEach((name)=>console.log(`${name} recieved a reward`));

// array include 

// const pets = ['dog','monkey', 'kiwi'];
// // console.log(pets.includes('kiwi'));
// if(pets.includes('monkey')){
//     console.log("we have the animal");
// }else{
//     console.log("we dont have this animal");
// }

// array reduce 
// let sum =0;
// const groceryList = [78,90,79];
// groceryList.forEach((number)=>{
//     sum+=number;
// })
// console.log(sum);

// const total = groceryList.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },0);
// console.log(total);

// asynchronus Javascript
const fetch = (username , callback) => {
    console.log('fetching....');
    setTimeout(()=>{
       callback( {username:username} ); 
    },2000);
}
fetch('muneeb', (user)=>{
    console.log(`your name is: ${user.username}`);
});

// promises js 

// const myPromise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve('sarmad on its way to promise ');
//     }else{
//         reject('sorry we are unable to find it ');
//     }
// })

// myPromise.then(result=> console.log(result));