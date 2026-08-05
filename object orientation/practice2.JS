
// CLASS ,CONSTRUCTOR ,METHOD 

class CreatePencil{       
    constructor(name, price,color,company){     // constructor
        this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
    }
      erase() {                                                       // Method
    document.body.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }

  
   write(text){                               //     METHOD
       let h1= document.createElement("h1")     
h1.textContent= text;
h1.style.color=this.color;
  document.body.append(h1);
    }

}
let p1 = new CreatePencil("natraj", 5, "grey", "Natraj");
let p2 = new CreatePencil("doms", 5, "green", "Doms");