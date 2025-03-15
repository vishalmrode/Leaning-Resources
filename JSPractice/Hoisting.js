// Hoisting example
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = "I am hoisted";

// Function hoisting
hoistedFunction(); // Works because function declarations are hoisted
function hoistedFunction() {
  console.log("I am a hoisted function");
}

const newFunction = outerFunction("outside");
newFunction("inside");
