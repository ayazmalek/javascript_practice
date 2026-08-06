

// Callback pattern and callback hell

// function wxyz(fnc) {                                             // Callback pattern
//   setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
// }

// wxyz(function () {
//   console.log("hey");
// });

function profileLekaraAo(username, cb) {
  console.log("Fetching profile data...");
  setTimeout(() => {
    cb({ _id: 12122, username, age: 19, email: "huihui@hui.com" });
  }, 2000);
}

function saarePostLekaraAo(id, cb) {
  console.log("Fetching all posts...");
  setTimeout(() => {
    cb({ _id: id, posts: ["hey", "hello", "good morning"] });
  }, 3000);
}

function savedPostsNikaalo(id, cb) {
  console.log("Fetching saved posts...");
  setTimeout(() => {
    cb({ _id: id, posts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
  }, 3000);
}

profileLekaraAo("ayaz", function (data) {                            // callback hell 
  console.log(data);
  saarePostLekaraAo(data._id, function (posts) {
    console.log(posts);
    savedPostsNikaalo(data._id, function (saved) {
      console.log(saved);
    });
  });
});


