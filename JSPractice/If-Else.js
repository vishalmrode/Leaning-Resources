function checkAge(age) {
  if (age >= 18) {
    console.log("You are authorized to vote");
  } else {
    console.log("Yo can not vote");
  }
}
checkAge(18);
//checkAge(0);

///////////////If-Else with Else If///////////////////
function checkNumber(number) {
  if (number < 0) {
    console.log("Given number is negative");
  } else if (number > 0) {
    console.log("Given number is positive");
  } else {
    console.log("Given number is zero");
  }
}

checkNumber(-11);

function checkOddEven(number) {
  if (number === 0) {
    console.log("The number is zero");
  } else if (number % 2 === 0) {
    console.log("The number is Even");
  } else {
    console.log("The number is ODD");
  }
}

function greaterNumber(a, b) {
  if (a > b) {
    console.log("a is greater than b");
  } else if (b > a) {
    console.log("b is greater than a");
  } else {
    console.log("Both are equal");
  }
}
greaterNumber(100, 10);

// checkOddEven(8);
// checkOddEven(0);
// checkOddEven(11);
