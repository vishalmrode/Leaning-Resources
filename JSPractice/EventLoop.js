// Promise.resolve().then(() => console.log(1));

// setTimeout(() => console.log(2), 10);

// queueMicrotask(() => {
//   console.log(3);
//   queueMicrotask(() => console.log(4));
// });

// console.log(5);

new Promise((resolve) => {
  console.log(1);
  resolve(2);
}).then((result) => console.log(result));

console.log(3);
