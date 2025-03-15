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
