// Step 1: Initialize an array of objects
let people = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Alice", age: 35 }
];

// Step 2: Add a new object to the array
let newPerson = { id: 4, name: "Bob", age: 28 };
let count = people.push(newPerson);
people.push(newPerson);
people.push({ id: 4, name: "Bob", age: 28 });
console.log("After adding a new person:");
console.log(people,count);

// Step 3: Remove an object from the array based on a criterion (e.g., remove person with id = 2)
let idToRemove = 2;
people = people.filter(person => person.id !== idToRemove);
console.log(`\nAfter removing person with id = ${idToRemove}:`);
console.log(people);

// Step 4: Modify an object in the array (e.g., change Bob's age to 29)
let idToModify = 4;
let personToModify = people.find(person => person.id === idToModify);
if (personToModify) {
  personToModify.age = 29;
}
console.log(`\nAfter modifying person with id = ${idToModify}:`);
console.log(people);

// Step 5: Iterate over the array and print each object
console.log("\nIterating over the array and printing each person:");
people.forEach(person => {
  console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
});
