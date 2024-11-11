// 1. Rest Operator in Function Arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log("Sum of numbers:", sum(1, 2, 3));            // 6
  console.log("Sum of numbers:", sum(1, 2, 3, 4, 5));      // 15
  console.log("Sum of numbers:", sum(10, 20));             // 30
  
  // 2. Rest Operator in Destructuring Arrays
  const arr = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = arr;
  console.log("First element:", first);          // 1
  console.log("Second element:", second);        // 2
  console.log("Remaining elements:", rest);      // [3, 4, 5]
  
  // 3. Rest Operator in Destructuring Objects
  const user = { name: 'abc', age: 25, city: 'New York', country: 'USA' };
  const { name, age, ...location } = user;
  console.log("Name:", name);                     // 'abc'
  console.log("Age:", age);                       // 25
  console.log("Location:", location);             // { city: 'New York', country: 'USA' }
  
  // 4. Rest Operator with Spread in Arrays
  const arr1 = [1, 2];
  const arr2 = [3, 4, 5];
  const combined = [...arr1, ...arr2];  // Spread and combine arrays
  console.log("Combined Array:", combined); // [1, 2, 3, 4, 5]
  
  // 5. Rest Operator with Default Values in Functions
  function greet(greeting = 'Hello', ...names) {
    names.forEach(name => {
      console.log(`${greeting}, ${name}!`);
    });
  }
  greet('Hi', 'abc', 'Bob', 'def');  // "Hi, abc!", "Hi, Bob!", "Hi, def!"
  greet('Hello', 'def', 'ghi');          // "Hello, def!", "Hello, ghi!"
  greet();                                // "Hello, undefined!"
  
  // 6. Rest Operator in Arrow Functions
  const multiply = (...nums) => nums.reduce((total, num) => total * num, 1);
  console.log("Multiplication of numbers:", multiply(1, 2, 3, 4)); // 24
  console.log("Multiplication of numbers:", multiply(5, 6));        // 30
  
  // 7. Rest Operator with Nested Objects
  const person = {
    name: 'Bob',
    address: {
      street: '123 Main St',
      city: 'Springfield'
    },
    age: 30
  };
  
  {
  // Destructure and collect remaining nested properties
  const { name, age, address: { street, ...restOfAddress } } = person;
  console.log("Name:", name);                    // 'Bob'
  console.log("Street:", street);                // '123 Main St'
  console.log("Rest of Address:", restOfAddress); // { city: 'Springfield' }
  
  // 8. Using Rest with Arrays in Function Arguments
  function logElements(...elements) {
    elements.forEach((element, index) => {
      console.log(`Element ${index + 1}:`, element);
    });
  }
  
  const data = ['apple', 'banana', 'cherry'];
  logElements(...data);
  // Output:
  // Element 1: apple
  // Element 2: banana
  // Element 3: cherry
  
  // 9. Combining Rest with Other Parameters
  function displayInfo(name, age, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log("Hobbies:", hobbies);
  }
  
  displayInfo('ABC', 30, 'Reading', 'Cycling', 'Swimming');
  // Output:
  // Name: ABC, Age: 30
  // Hobbies: ['Reading', 'Cycling', 'Swimming']
}