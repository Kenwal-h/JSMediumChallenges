//function to return element 1 if it's false and element 2 if not

function falsyOrTruthy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(falsyOrTruthy(-1, 30));

//function to return the length of any given array

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3]));

//function to return the last element of any given array

/* function arrLength(arr) {
    return arr[arr.length - 1]
}

console.log (arrLength([1, 2, 3])); */

//function to find the sum of an array

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));

//function to add up all the numbers from one to the number that is given.

function progressiveSum(input) {
  let sum = 0;
  for (let i = 0; i <= input; ++i) {
    sum += i;
  }
  return sum;
}

console.log(progressiveSum(600));

//function to return seconds to mm:ss format

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;
  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }
  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(600));

//function to return biggest number in an array

function getMax(num) {
  let max = num[0];
  for (let i = 0; i < num.length; ++i) {
    if (num[i] > num[i - 1]) {
      max = num[i];
    }
  }
  return max;
}

console.log(getMax([-100, -200, -300]));

//function to return a string but reversed

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; --i) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString("This is cool"));

//This is how you can change a string to an array, reverse it and then rejoin it as a string

let str = "David";
//str.split, splits the string into an array. str.split('').reverse().join('') splits the string into an array. reverses it using .reverse() and the rejoins it as a string after it was reversed using .join('')
console.log(str.split("").reverse().join(""));

//function to turn every element in an array to 0

// function convertToZeros (numArray) {
//     for (let i = 0; i < numArray.length; ++i) {
//         numArray[i] = 0;
//     }
//     return numArray;
// }

// console.log(convertToZeros([5, 100, 0]));

//Array.map solution

function convertToZeros(numArray) {
  return numArray.map((elem) => 0);
}

console.log(convertToZeros([15, 6, 500]));

//function to filter out apples from a given array

function removeApples(fruits) {
    return fruits.filter(elem => elem !== 'Apple');
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

//function to filter out all the falsy values

function filterOutFalsy(truthy) {
    return truthy.filter(Boolean)
}

console.log(filterOutFalsy(['Tomato', 'Orange', 0, NaN, 'Apple', [], false]));

//function to return the a given array of elements into their boolean values

// function convertToBoolean(boolArray) {
//     let newBoolArray = []
//     for (let i = 0; i < boolArray.length; ++i) {
//            newBoolArray.push(!!boolArray[i])
//         }
//         return newBoolArray;
//     }

console.log (convertToBoolean([500, 0, 'David', '', []]))


function convertToBoolean(boolArray) {
    return boolArray.map(elem => !!elem)
}