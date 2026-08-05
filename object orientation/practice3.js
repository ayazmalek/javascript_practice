// extends & super

class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }

  checkRole() {
    return `you are a ${this.role}`;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }
  remove() {
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}

let u1 = new User("ayaz", "Bhopal", "visinory", "hey@heyehey.com");
let u2 = new User("adil", "Delhi", "humble", "hmm@heyehey.com");
let a1 = new Admin("admin123", "India", "adminnnn", "a@adsf.a");

let a = {};                 // Hardcopy
let b = { ...a };

let c = {};                 // Shared
let d = Object.create(c);
