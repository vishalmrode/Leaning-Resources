//The "constructor" in a class is a special method and
// it should be defined only once in a class. i.e,
//  If you write a constructor method more than once in a class it will throw a SyntaxError error.

 class Employee {
   constructor() {
     this.name = "John";
   }
   constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
     this.age = 30;
   }
 }

 var employeeObject = new Employee();

 console.log(employeeObject.name);


 //You can use the super keyword to call the constructor of a parent class. 
 //Remember that super() must be called before using 'this' reference.
 // Otherwise it will cause a reference error. Let's the usage of it,

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.area = value;
  }
}