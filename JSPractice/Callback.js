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

// Callback with userData /////////////
function getUserData(userId, callback) {
  setTimeout(function () {
    const users = [
      { id: 1, name: "Vishal" },
      { id: 2, name: "Amit" },
      { id: 3, name: "Ravi" },
    ];

    const user = users[userId];
    if (user) {
      callback(null, user); // Call the callback with user data
    } else {
      callback("User not found", null); // Call the callback with an error message
    }
  }, 2000); // Simulate a delay of 2 seconds
}

function handleUserData(error, user) {
  if (error) {
    console.error("Error fetching user data:", error);
  } else {
    console.info("User data:", user); // Handle the user data here
  }
}

getUserData(1, handleUserData); // Call the function with a user ID and a callback
getUserData(5, handleUserData);
