// String methods
const str = "Hello, World!";

// 1. length - Returns the length of the string.
console.log("String length:", str.length);

// 2. toUpperCase - Converts the string to uppercase.
console.log("Uppercase:", str.toUpperCase());

// 3. toLowerCase - Converts the string to lowercase.
console.log("Lowercase:", str.toLowerCase());

// 4. indexOf - Returns the index of the first occurrence of a substring.
console.log("Index of 'World':", str.indexOf("World"));

// 5. slice - Extracts a portion of the string.
console.log("Slice:", str.slice(0, 5));

// Number methods
const num = 42.678;

// 1. toFixed - Formats a number with a fixed number of decimal places.
console.log("Fixed to 2 decimal places:", num.toFixed(2));

// 2. toString - Converts a number to a string.
console.log("Number to String:", num.toString());

// 3. parseInt - Parses a string and returns an integer.
const intStr = "123";
console.log("Parsed Integer:", parseInt(intStr));

// 4. parseFloat - Parses a string and returns a floating-point number.
const floatStr = "3.14";
console.log("Parsed Float:", parseFloat(floatStr));

// 5. isNaN - Checks if a value is NaN (Not-a-Number).
console.log("Is NaN:", isNaN("Not a number"));

// Array methods
const colors = ["red", "green", "blue", "yellow", "orange"];

// 1. join - Converts an array to a string with a specified separator.
console.log("Joined Array:", colors.join(", "));

// 2. push - Adds elements to the end of an array.
colors.push("purple");
console.log("After Push:", colors);

// 3. pop - Removes and returns the last element of an array.
const poppedColor = colors.pop();
console.log("Popped Color:", poppedColor);

// 4. indexOf - Returns the index of the first occurrence of an element in an array.
console.log("Index of 'blue':", colors.indexOf("blue"));

// 5. concat - Combines arrays into a new array.
const moreColors = ["pink", "brown"];
const combinedColors = colors.concat(moreColors);
console.log("Combined Arrays:", combinedColors);

// Date methods
const currentDate = new Date();

// 1. getFullYear - Gets the current year.
console.log("Current Year:", currentDate.getFullYear());

// 2. getMonth - Gets the current month (0-11).
console.log("Current Month:", currentDate.getMonth());

// 3. getDate - Gets the day of the month (1-31).
console.log("Current Day:", currentDate.getDate());

// 4. getHours - Gets the current hour (0-23).
console.log("Current Hour:", currentDate.getHours());

// 5. toDateString - Converts the date to a string in a specific format.
console.log("Date String:", currentDate.toDateString());

// Function methods
function greet(name) {
  console.log("Hello, " + name + "!");
}

// 1. call - Calls a function with a specified this value and arguments.
greet.call(null, "John");

// 2. apply - Calls a function with a specified this value and an array of arguments.
greet.apply(null, ["Alice"]);
