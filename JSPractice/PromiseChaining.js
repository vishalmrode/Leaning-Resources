function getEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num);
    } else {
      reject(new Error(`${num} is not an even number`));
    }
  }, delay);
}

function doubleNumber(num) {
  return new Promise((resolve) => {
    resolve(num * 2);
  });
}

function addTen(num) {
  return new Promise((resolve) => {
    resolve(num + 10);
  });
}

// Promise chaining
getEvenNumber(4, 1000)
  .then((evenNum) => {
    console.log(`Even number: ${evenNum}`);
    return doubleNumber(evenNum);
  })
  .then((doubledNum) => {
    console.log(`Doubled number: ${doubledNum}`);
    return addTen(doubledNum);
  })
  .then((finalResult) => {
    console.log(`Final result after adding 10: ${finalResult}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
