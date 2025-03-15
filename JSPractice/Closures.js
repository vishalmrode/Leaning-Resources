function createCounter() {
  let counter = 0;
  function increment() {
    return ++counter;
  }
  return increment;
}
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter2()); // 1
console.log(counter1()); // 2

// Closure example
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

// Closures are a powerful feature in programming languages like JavaScript.
// They allow functions to retain access to variables from their containing (enclosing) scope even after the outer function has finished executing.
// This means that a function defined within another function can access variables from the outer function, even if the outer function has already returned.
// Here are some common use cases of closures:

// - Data Privacy: Closures can be used to create private variables and methods. By defining variables within a function's scope and returning inner functions that have access to those variables, you can create a form of encapsulation, limiting access to certain data or functionality.

// - Function Factories: Closures are often used to create functions with pre-set parameters. This is useful when you need to create multiple functions with similar behavior but different configurations.

// - Functions: Closures are frequently used in asynchronous programming, such as handling event listeners or AJAX requests. The inner function captures variables from the outer scope and can access them when the callback is invoked.

// - Memoization: Closures can be used for memoization, a technique to optimize performance by caching the results of expensive function calls. The inner function can remember the results of previous calls and return the cached result if the same input is provided again.Functions: Closures are frequently used in asynchronous programming, such as handling event listeners or AJAX requests. The inner function captures variables from the outer scope and can access them when the callback is invoked.

//- Memoization: Closures can be used for memoization, a technique to optimize performance by caching the results of expensive function calls. The inner function can remember the results of previous calls and return the cached result if the same input is provided again.
