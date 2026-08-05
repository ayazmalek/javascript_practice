/*


// Encapsulation is a fundamental principle of Object-Oriented Programming (OOP) that involves restricting direct access to some of an object's components. In modern JavaScript (ES2022+), this is achieved using Private Class Fields denoted by the # prefix.

// When you prefix a field name with # inside a class, it becomes strictly private. This means:

// The field can only be accessed or modified from within the class definition.
// Any attempt to access it from outside the class instance will result in a SyntaxError.

// Encapsulation using private fields (#)

class BankAccount {
  // Private field
  #balance = 0;

  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }

  // Method to safely modify the private field
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }

  // Method to safely read the private field
  getBalance() {
    return this.#balance;
  }
}

// Create an account
const myAccount = new BankAccount(100);

// Deposit money
myAccount.deposit(50);  

// Access balance through the public method
console.log(myAccount.getBalance()); // Output: 150

// Direct access to private field (will cause a SyntaxError)
// console.log(myAccount.#balance);


*/