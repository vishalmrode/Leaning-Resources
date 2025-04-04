// Example of Promise methods in JavaScript

// 1. Promise.resolve()
// Creates a promise that is resolved with a given value.
const resolvedPromise = Promise.resolve("Resolved Value");
resolvedPromise.then((value) => console.log("Promise.resolve:", value));

// 2. Promise.reject()
// Creates a promise that is rejected with a given reason.
const rejectedPromise = Promise.reject("Rejected Reason");
rejectedPromise.catch((reason) => console.log("Promise.reject:", reason));

// 3. Promise.all()
// Takes an array of promises and resolves when all promises are resolved.
// If any promise is rejected, it rejects with that reason.
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log("Promise.all:", values))
  .catch((error) => console.log("Promise.all Error:", error));

// 4. Promise.race()
// Resolves or rejects as soon as one of the promises resolves or rejects.
const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 100));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 200));

Promise.race([promiseA, promiseB])
  .then((value) => console.log("Promise.race:", value))
  .catch((error) => console.log("Promise.race Error:", error));

// 5. Promise.allSettled()
// Waits for all promises to settle (either resolved or rejected) and returns their results.
const promiseX = Promise.resolve("X");
const promiseY = Promise.reject("Y Error");

Promise.allSettled([promiseX, promiseY]).then((results) =>
  console.log("Promise.allSettled:", results)
);

// 6. Promise.any()
// Resolves with the first fulfilled promise. If all promises are rejected, it rejects with an AggregateError.
const promiseM = Promise.reject("M Error");
const promiseN = Promise.resolve("N");

Promise.any([promiseM, promiseN])
  .then((value) => console.log("Promise.any:", value))
  .catch((error) => console.log("Promise.any Error:", error));
