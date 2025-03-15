// ExecutionContext.js

//The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser).
//All the global code that is not inside a function or object will be executed inside this global execution context.
// Since JS engine is single threaded there will be only one global environment and there will be only one global execution context.

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

var x = 10;

function A() {
  console.log("Start function A");

  function B() {
    console.log("In function B");
  }

  B();
}

A();

console.log("GlobalContext");
