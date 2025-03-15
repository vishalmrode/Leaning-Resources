//Since for..in loop iterates over the keys of the object,
// the first loop logs 0, 1, 2 and newProp while iterating over the array object.
// The for..of loop iterates over the values of a arr data structure and logs a, b, c in the console.

let arr = ["a", "b", "c"];

arr.newProp = "newVlue";

// key are the property keys
for (let key in arr) {
  console.log(key); // 0, 1, 2 & newProp
}

// value are the property values
for (let value of arr) {
  console.log(value); // a, b, c
}
