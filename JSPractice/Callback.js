// Basic callback function

function greet(name, callback) {
  console.log("Hello " + name); // This is the main function
  //Normal sync step/task
  callback();
}

function welcome() {
  console.log("Welcome to the world of programming!"); // This is the callback function
}
greet("Vishal", welcome); // Calling the main function with a callback

// Callback with asynchronous function////////////

function printInfo(name, callback) {
  setTimeout(function () {
    console.log("print info for: " + name); // This is the main function
    callback("Please call me back......."); // Calling the callback function after a delay
  }, 2000); // Delay of 2 seconds (2000 milliseconds)
}

function displayMessage(mesg) {
  console.log(mesg); // This is the callback function
}

printInfo("Vishal", displayMessage); // Calling the main function with a callback
