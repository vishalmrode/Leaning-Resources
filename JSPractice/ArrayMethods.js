let numbers = [1, 2, 3, 4, 5, 6, 7];

let newNumbers = numbers.map((e) => e * e);

console.log(newNumbers);

//Farenheight to celcius
//(F-32)*(5/9)
let tempF = [32, 104.5, 220.1, 500, 360];

function farenhTocels(fah) {
  return (fah - 32) * (5 / 9);
}

let celTemp = tempF.map(farenhTocels);
console.log("The temp converted is in celcius: " + celTemp);

//////////////////////////filter//////////////////////////

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let evennumbers = num.filter((a) => a % 2 === 0);
console.log(evennumbers);

let employee = [
  { name: "Veda", age: 2, gender: "female" },
  { name: "Shrisha", age: 4, gender: "female" },
  { name: "Anu", age: 17, gender: "female" },
  { name: "Harshu", age: 14, gender: "female" },
  { name: "Manjusha", age: 29, gender: "female" },
  { name: "Vishal", age: 34, gender: "male" },
  { name: "Swaraj", age: 22, gender: "male" },
  { name: "Shrikant", age: 44, gender: "male" },
];

let femaleEmpLess15 = employee.filter((emp) => {
  return emp.gender === "female" && emp.age < 15; 
});

console.log(femaleEmpLess15);
