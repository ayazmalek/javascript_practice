// Constructur function - first word should be capital

function CreatePencil(name, price, color, company) {
  // Constructor
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  // this.write = function (text) {
  //   let h1 = document.createElement("h1");
  //   h1.textContent = text;
  //   h1.style.color = color;
  //   document.body.appendChild(h1);

  
}
/* 
agar tumhare constructor function ki koi field prototype par attach kardene par us
 constructor se banne wali sabhi new instance yani ki objects par wo field automatically attach ho jayegi
 */


  CreatePencil.prototype.write = function (text) {            // prototype -> all instance par write automatically set ho jayega
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  console.log(h1);
  document.body.append(h1);
};






//  PROTOTYPE
// CreatePencil.prototype.company = "SIX SENSE"

let pencil1 = new CreatePencil("natraj", 5, "red", "Natraj");
let pencil2 = new CreatePencil("doms", 5, "skyblue", "Doms");
