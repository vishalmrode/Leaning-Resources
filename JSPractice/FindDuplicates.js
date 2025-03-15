function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set(); // Change this to a Set to avoid duplicates

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num); // Add to set to avoid multiple occurrences
    } else {
      seen.add(num);
    }
  }

  return [...duplicates]; // Convert the set back to an array if needed
}

// Test the function
const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 3];
const result = findDuplicates(numbers);

console.log("Duplicates:", result);

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(10));

function fibonacci(n) {
  let fib = [0, 1]; // Initialize the first two Fibonacci numbers.

  // Generate Fibonacci sequence up to nth term.
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n); // Slice the array to return only the first n Fibonacci numbers.
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
