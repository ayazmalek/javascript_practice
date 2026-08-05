// // this in global scope -> window
// console.log(this);

// // this in function scope -> window
// function fn(){
//   console.log(this);
// }
// fn();

// // this in menthod scope -> object

// let obj ={
//     name : "ayaz",
//     age : 19 ,
//      sayName :function (){
//         console.log(this.age)
//                 console.log(this.name)
//         console.log(this)

//      },

// }
// obj.sayName();


// THIS KEY in event HANDLING THAT IS ELEMENT 
// isme this keyword jispar event listener laga hua he wahi hoga 


// document.querySelector("h1").addEventListener("click",function(){
//   console.log(this);
//   console.log(this.style.color = "red");
// })
// this in class -> blank object
// class Abcd{
//   constructor(){
//     console.log("hey");
//     this.a = 10;
//   }
// }
// let val = new Abcd();     // val => Abcd class KA instance variable he 
