/////// VAR VARIABLE/////
////SCOPE: GLOBAL,LOCAL AND FUNCTIONAL

// var: re-declaration and reassignment is possible.
// let: can be reinitialized but not re-declared
// const: can neither be re-declared nor reinitialized

var x = 10;
function test() {
  var y = 20;
}
console.log(x);

///////////////////////////////////////
var pop = "Global scope JS";
console.log(pop);

function relation() {
  var top = "Hello Local JS";
  console.log(top);
}
relation();
/////////////////////////////////////////////////

var browser = "firefox";
var browser = "Chrome";
browser = "edge";
console.log(browser);
///////////////////////////////////////////

var flag = "I am typing"; // this value will only be used if not redeclared
var t1 = 4;
if (t1 > 3) {
  var flag =
    "I am Learning and the flag value got reinitialized and redeclared";
}
console.log(flag);
/////////////////////////////////////////////////////////////////

////////////LET VARIABLE/////////////
///////SCOPE: BLOCK SCOPED
//{}

let a = 4;

a = 5;

console.log(a);

//////////CONST///////////////////

const message = "Vishal";
//message = "Manjusha";

console.log(message);

// Trimming whitespace
let str = "   Hello, world!   ";
let trimmedStr = str.trim();

console.log("Trimmed String:", trimmedStr);

// Checking if a string contains a substring
let str1 = "Hello, world!";
let contains = str1.includes("word");

console.log("Contains 'world':", contains);

// Finding a substring within a string
let str2 = "Hello, world!";
let index = str2.indexOf("world");

if (index !== -1) {
  console.log(`'world' found at index: ${index}`);
} else {
  console.log("'world' not found.");
}
