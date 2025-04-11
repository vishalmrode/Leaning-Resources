function getEvenNumber(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(new Error("Number is not even"));
      }
    }, delay);
  });
}

// Promise chaining
getEvenNumber(4, 1000)
  .then((result) => {
    console.log("Step1: getting the result with even number", result);
    return getEvenNumber(7, 2000);
  })
  .then((result) => {
    console.log("Step2: getting the result with even number", result);
  })
  .catch((error) => {
    console.error("Promise chain error:", error.message);
  });
