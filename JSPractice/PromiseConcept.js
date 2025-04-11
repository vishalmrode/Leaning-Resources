const randomPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  console.log(`Generated Random Number: ${randomNumber}`);
  if (randomNumber > 0.5) {
    resolve("Success! The number is greater than 0.5.");
  } else {
    reject("Failure! The number is less than or equal to 0.5.");
  }
});

randomPromise
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
