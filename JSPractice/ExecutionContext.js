// ExecutionContext.js

// Function to demonstrate the creation of execution contexts
function firstFunction() {
  console.log("Entering firstFunction");

  function secondFunction() {
    console.log("Entering secondFunction");

    function thirdFunction() {
      console.log("Entering thirdFunction");
      console.log("Exiting thirdFunction");
    }

    thirdFunction();
    console.log("Exiting secondFunction");
  }

  secondFunction();
  console.log("Exiting firstFunction");
}

console.log("Global Execution Context");
firstFunction();
console.log("Global Execution Context Ended");

// Scope chain example
var globalVar = "I am a global variable";

function outer() {
  var outerVar = "I am an outer variable";

  function inner() {
    var innerVar = "I am an inner variable";
    console.log(globalVar); // Accessing global variable
    console.log(outerVar); // Accessing outer function variable
    console.log(innerVar); // Accessing inner function variable
  }

  inner();
}

outer();
