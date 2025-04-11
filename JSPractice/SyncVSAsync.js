// sync vs async behavior
// Synchronous behavior
console.log("Synchronous: Start");
for (let i = 0; i < 3; i++) {
  console.log(`Synchronous: ${i}`);
}
console.log("Synchronous: End");

// Asynchronous behavior
console.log("Asynchronous: Start");
setTimeout(() => {
  console.log("Asynchronous: Timeout");
}, 1000);
console.log("Asynchronous: End");
