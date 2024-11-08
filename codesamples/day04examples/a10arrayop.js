// Initial array of objects
let people = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Alice", age: 35 }
  ];
  
  // 1. Using the Spread Operator: Cloning the array
  let clonedPeople = [...people];  // Clone the array
  console.log("Cloned People:", clonedPeople);
  
  // Modify the cloned array
  clonedPeople[0].name = "Mike";  // Changing the name of the first person
  console.log("\nAfter modifying the cloned array:");
  console.log("Original People:", people);  // Original array is unchanged
  console.log("Modified Cloned Array:", clonedPeople);  // Cloned array is modified
  
  // 2. Using the Spread Operator: Merging Arrays
  let morePeople = [
    { id: 4, name: "Bob", age: 28 },
    { id: 5, name: "Charlie", age: 32 }
  ];
  
  // Merging the original array with another array using spread operator
  let allPeople = [...people, ...morePeople];
  console.log("\nMerged People Array:", allPeople);
  
  // 3. Using the Spread Operator: Adding an Object to the Array
  let newPerson = { id: 6, name: "David", age: 40 };
  let updatedPeople = [...people, newPerson];  // Add new person to the array
  console.log("\nUpdated People Array after adding a new person:", updatedPeople);
  
  // 4. Using Destructuring: Extracting Data from Objects in the Array
  let [firstPerson, secondPerson] = people;  // Destructuring the first two people
  console.log("\nFirst Person:", firstPerson);
  console.log("Second Person:", secondPerson);
  
  // Destructuring specific properties (name and age) from the first person
  let [{ name, age }] = people;
  console.log("\nName and Age of the first person:", name, age);
  
  // Destructuring with default value for missing property (e.g., middleName)
  let [{ name: personName, age: personAge, middleName = "N/A" }] = people;
  console.log("\nName and Age with default middle name:", personName, personAge, middleName);
  
  // 5. Destructuring Multiple Objects in the Array
  let [
    { id: firstId, name: firstName },
    { id: secondId, name: secondName }
  ] = people;
  console.log("\nDestructured ID and Name of First and Second Person:");
  console.log("First Person:", firstId, firstName);
  console.log("Second Person:", secondId, secondName);
  
  // 6. Destructuring with Default Values
  // Destructuring with a default value for missing property
  let [{ id: firstIdWithDefault, age: firstAgeWithDefault = 0 }] = people;
  console.log("\nDestructured ID and Age of first person with default age:", firstIdWithDefault, firstAgeWithDefault);
  
  // 7. Destructuring Nested Objects (optional, but more advanced example)
  let peopleWithAddress = [
    { id: 1, name: "John", age: 30, address: { city: "New York", zip: "10001" } },
    { id: 2, name: "Jane", age: 25, address: { city: "Los Angeles", zip: "90001" } }
  ];
  
  // Destructuring nested objects
  let [
    { address: { city: firstCity, zip: firstZip } },
    { address: { city: secondCity, zip: secondZip } }
  ] = peopleWithAddress;
  
  console.log("\nDestructured Nested Address Information:");
  console.log("First Person's City and Zip:", firstCity, firstZip);
  console.log("Second Person's City and Zip:", secondCity, secondZip);
  
  