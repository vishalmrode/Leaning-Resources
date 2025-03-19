// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const subtract = function (a, b) {
  return a - b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Anonymous Function (assigned to a variable)
const divide = function (a, b) {
  return a / b;
};

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed");
})();

// Generator Function (Using function*)
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method Declaration
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Using yield inside a generator function
function* countUpTo(max) {
  let count = 0;
  while (count < max) {
    yield count++;
  }
}

// Example usage
const gen = generateSequence();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

const person = new Person("John", 30);
person.greet(); // Hello, my name is John and I am 30 years old.

const counter = countUpTo(3);
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
