var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  var length = arr.length;
  var min = Infinity;
  while (length--) {
    if (arr[length] < min) {
      min = arr[length];
    }
  }
  return min;
}

function findMax(arr) {
  var length = arr.length;
  var max = -Infinity;
  while (length--) {
    if (arr[length] > max) {
      max = arr[length];
    }
  }
  return max;
}

console.log(findMin(marks));
console.log(findMax(marks));
// Output:
// 20
// 70
// Explanation: The findMin function returns the minimum value from the array, and the findMax function returns the maximum value from the array. The output is 20 and 70, respectively. The functions use a while loop to iterate through the array and compare each element to the current minimum or maximum value. If the element is smaller than the current minimum value, it updates the minimum value. If the element is larger than the current maximum value, it updates the maximum value. This approach avoids using the Math.min and Math.max functions and provides a custom implementation of finding the minimum and maximum values in an array.
