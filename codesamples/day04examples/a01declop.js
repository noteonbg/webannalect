// Decision Making

// 1. if statement
let temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day!");
}

// 2. if...else statement
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// 3. if...else if...else statement
let day = "Saturday";
if (day === "Monday") {
  console.log("Start of the work week.");
} else if (day === "Saturday") {
  console.log("It's the weekend!");
} else {
  console.log("It's a weekday.");
}

// 4. switch statement
let fruit = "Apple";
switch (fruit) {
  case "Apple":
    console.log("The fruit is Apple.");
    break;
  case "Banana":
    console.log("The fruit is Banana.");
    break;
  case "Orange":
    console.log("The fruit is Orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

// Loops

// 5. for loop - Looping through a range of numbers
console.log("\nCounting from 1 to 5 using for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 6. while loop - Looping until a condition is false
let count = 1;
console.log("\nCounting from 1 to 5 using while loop:");
while (count <= 5) {
  console.log(count);
  count++;
}

// 7. do...while loop - Looping at least once before checking the condition
let index = 1;
console.log("\nCounting from 1 to 5 using do...while loop:");
do {
  console.log(index);
  index++;
} while (index <= 5);

// 8. for...in loop - Looping through object properties
let person = {
  name: "def",
  age: 30,
  city: "abc"
};

console.log("\nObject properties using for...in loop:");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 9. for...of loop - Looping through array elements
let colors = ["Red", "Green", "Blue"];
console.log("\nArray elements using for...of loop:");
for (let color of colors) {
  console.log(color);
}
