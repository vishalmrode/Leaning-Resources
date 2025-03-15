/// for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i = 1; i <= 10; i++) {
  console.log("The numbers are:", i);
}
console.log("-------------");
/// for...of loop
//Syntax
// for (const element of object) {
// }
//iterates over iterable objects like arrays,strings and maps....

let array = [1, 2, 3, 4, 5, 6, 7];

for (let e of array) {
  console.log(e);
}

console.log("-------------");

for (let i = 0; i < array.length; i++) {
  console.log("The array list:", array[i]);
}

//////for....in loop

const user = {
  name: "Vishal",
  age: 29,
  city: "Pune",
};

for (const key in user) {
  console.log(key + ": ", user[key]);
}
