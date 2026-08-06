


// Promises: resolve, reject, then, catch

// Tame ek promise banavo je 2 state mathi koi ek state ma jai sako , kato ee resolve thase ya reject thase but code banne mate lakhvano

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res("resolved with " + rn);
    else rej("rejected with " + rn);
  }, 3000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});


