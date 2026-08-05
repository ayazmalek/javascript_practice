/*
//  manual bindling : call ,apply & bind

// CALL
// function kko call karte time aap  USKI this ki value set kar sakte ho ki wo kyahogi

let obj = {
  name: "ayaz",
  age: "20",
};

// function abcd (){
//     console.log(this)
// }

// abcd.call(obj);

function opq(a, b, c) {
  console.log(this, a, b, c);
}
// call
opq.call(obj, 1, 2, 3);


// APPLY
opq.apply(obj, [1, 2, 3]);

// bind ,which will create a function intead of calling obj 

let fun = opq.bind(obj, 1, 2, 3);
fun();
*/