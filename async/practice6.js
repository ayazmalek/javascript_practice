/*


// async functions always return Promises

// 1. Returns a normal value
async function greet() {
  return "Hello";
}

// 2. Returns a Promise
async function getNumber() {
  return Promise.resolve(100);
}

// 3. Throws an error (Rejected Promise)
async function checkAge(age) {
  if (age < 18) {
    throw new Error("Not Eligible");
  }
  return "Eligible";
}

// Calling all async functions

console.log(greet());

greet().then((msg) => {
  console.log(msg);
});

getNumber().then((num) => {
  console.log(num);
});

checkAge(16)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });


  */