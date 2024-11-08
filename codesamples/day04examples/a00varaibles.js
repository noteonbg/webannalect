// Primitive Data Types

// 1. String: Text data
let name = "abc";
console.log("String:", name); // John Doe

// 2. Number: Numeric data (both integers and floats)
let age = 30;
let temperature = 36.6;
console.log("Number (Integer):", age);  // 30
console.log("Number (Float):", temperature);  // 36.6

// 3. Boolean: True or false values
let isAdult = true;
let isEmployed = false;
console.log("Boolean (True):", isAdult);  // true
console.log("Boolean (False):", isEmployed);  // false

// 4. null: Represents an intentional absence of any value or object
let nothing = null;
console.log("Null:", nothing);  // null

// 5. undefined: A variable that has been declared but not assigned a value
let unassignedVar;
console.log("Undefined:", unassignedVar);  // undefined

// 6. Symbol: A unique identifier (new in ES6)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);  // Symbol(id)

// Non-Primitive Data Types

// 7. Object: Collection of key-value pairs
let person = {
  name: "def",
  age: 28,
  isMarried: false,
  address: {
    city: "New York",
    zip: "10001"
  }
};
console.log("\nObject:", person);

// Accessing object properties
console.log("Object - Name:", person.name);  
console.log("Object - City:", person.address.city);  

// 8. Array: Ordered collection of values (can be mixed types)
let colors = ["Red", "Green", "Blue"];
console.log("\nArray:", colors);

// Accessing array elements
console.log("Array - First Color:", colors[0]);  // Red
console.log("Array - Second Color:", colors[1]);  // Green

// 9. Function: Function is also a type of object
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("\nFunction Call:", greet("abc"));  

// 10. Date: Represents date and time
let currentDate = new Date();
console.log("\nDate:", currentDate);  // e.g., Mon Nov 08 2024 15:21:39 GMT+0000 (Coordinated Universal Time)

// 11. RegExp: Regular expression (used for pattern matching in strings)
let regex = /hello/i;
console.log("\nRegExp:", regex.test("Hello World"));  // true (case insensitive)
console.log("RegExp:", regex.test("world"));  // false

// Typeof Operator: Checking the data type of a value
console.log("\nType of name (String):", typeof name);  // string
console.log("Type of age (Number):", typeof age);  // number
console.log("Type of isAdult (Boolean):", typeof isAdult);  // boolean
console.log("Type of nothing (Null):", typeof nothing);  // object (this is a known quirk in JavaScript)
console.log("Type of unassignedVar (Undefined):", typeof unassignedVar);  // undefined
console.log("Type of uniqueId (Symbol):", typeof uniqueId);  // symbol
console.log("Type of person (Object):", typeof person);  // object
console.log("Type of colors (Array):", Array.isArray(colors));  // true (checking if it's an array)

// Checking the type of function
console.log("Type of greet (Function):", typeof greet);  // function
