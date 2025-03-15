let array = []; //Empty array

////////push method// This will add elements in an array at the end
let language = ["JAVA", "C++", "JavaScript"];
language.push("Python", "HTML");
console.log(language);

/////////////////////pop method////removes last element from an array

let arrayNumber = [1, 2, 3, 4, 5, 6];
arrayNumber.pop();
console.log(arrayNumber);

///////shift method////////// removes the first element from an array
let fruits = ["Apple", "Banana", "Guava", "Lichi", "Mango", "Pineapple"]; // Array with the strings
fruits.shift();
console.log(fruits);

//////////////unshift method///////// Adds one more elements to the beginning of an array
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors.length);
colors.unshift("black", "grey", "white");
console.log(colors);
console.log(colors.length);

////////splice method/////////// Add or remove elements from specific index of array
let animals = ["dog", "cat", "horse"];
// animals.splice(1, 1, "Fish");
// console.log(animals);

console.log(animals);
// animals.splice(1, 2, "snake");
// console.log(animals);

///////slice method/////
let test = [1, 2, 3, 4, 5];
let newTest = test.slice(1, 4);
console.log(newTest);

////////concat method///////////

let fro = ["Mango", "cucumber", "spinach"];
let n = [1, 2, 3, 4, 5, 6, 7];

let mixedValues = fro.concat(n);
console.log(mixedValues);

////indexOf////////////

let color = ["red", "blue", "green", "red"];
let indexRed = color.indexOf("red");
console.log(indexRed);

let secondIndexRed = color.indexOf("red", 1);
/////OR ////
let secondIndexRedNew = color.indexOf("red", color.indexOf("red") + 1);
console.log(secondIndexRedNew);

///////////////includes////////////
let users = ["Admin", "BA", "QA"];
let valuePresent = users.includes("QA", "SA");
console.log(valuePresent);

///forEach function///////////

let num = [1, 2, 3, 4, 5, 6, 7];
num.forEach((e) => {
  console.log(e);
});

console.log("--------------------------------------");

num.forEach((e) => {
  console.log(e + 1);
});
