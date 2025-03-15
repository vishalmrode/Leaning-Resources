let elements = ["water", "earth", "fire", "AIR"];

elements.push("abc");
console.log(elements);

elements.pop();
console.log(elements);

elements.shift();
console.log(elements);

elements.unshift("newtesttt");
console.log(elements);

elements.splice(1, 1, "testing");
console.log(elements);

let newarray = elements.slice(1, 2);
console.log(newarray);

let abc = [1, 2, 2, 33, 44, 55];
let pqr = ["abc", [77, "ddfd"], true];

let newinfo = abc.concat(pqr);
console.log(newinfo);

let vegetable = ["spinach", "chilli", "capsicum", "garlic", "spinach"];
let indexvalueveg = vegetable.indexOf("spinach");

let valuesecond = vegetable.indexOf("spinach", 1);
console.log(indexvalueveg);

console.log(valuesecond);

let flagforvalue = vegetable.includes("spinach");
console.log(flagforvalue);
