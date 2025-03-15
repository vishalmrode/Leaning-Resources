// Function to generate Fibonacci series
function generateFibonacci(n) {
  // Initialize the array with the first two Fibonacci numbers
  let fibArray = [0, 1];

  // Use a loop to calculate and add the next Fibonacci numbers
  for (let i = 2; i < n; i++) {
    // Next Fibonacci number is the sum of the last two numbers
    let nextNumber = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(nextNumber);
  }

  // Return the generated Fibonacci series
  return fibArray;
}

// Example usage: Generate the first 10 numbers in the Fibonacci series
let fibonacciSeries = generateFibonacci(5);
console.log(fibonacciSeries);

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // If divisible by any number other than 1 and itself
  }
  return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("The factorial is:", factorial(5)); // 120

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("vishal"));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array1 = array.splice(2, 5, 11, 12, 13, 14, 15);

console.log("array:", array1);
console.log("arrayOriginal", array);

let map = new Map();
map.set(1, "one");
map.set("two", 2);
map.set(true, "true");

console.log(map.get(1)); // Output: 'one'
console.log(map.has("two")); // Output: true

// Iterating through map
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}
