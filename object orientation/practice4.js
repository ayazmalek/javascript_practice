// clasical inheritance vs prototypal


// clasical inheritance means classes banana and usko inherit karta jisko hamm widely use karte he in java ,js etc



//  Classical Inheritance (Class-based): Objects inherit from classes. It creates a hierarchical structure where subclasses extend base classes.
// claas-> class




// Prototypal Inheritance (Object-based):Objects inherit from other objects. If you look for a property on an object and it isn't found, the engine looks at its prototype, then the prototype's prototype, and so on (the prototype chain).
// object -> object


// prototypal inherit me aapke passsek object he uske methods/props ko aap naye kisi aur dusre object me inherit kar sakte ho


let coffee = {
  color: "dark",
  drink: function () {
    console.log("gut gut gut");
  },
};
let turkishcofee = Object.create(coffee);
console.log(turkishcofee);
turkishcofee.drink();