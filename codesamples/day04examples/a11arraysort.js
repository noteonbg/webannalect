// Initialize an array of objects
let people = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Alice", age: 35 },
    { id: 4, name: "Bob", age: 28 }
  ];
  
  // Function to sort the array by 'id'
  function sortById(arr) {
    return arr.sort((a, b) => a.id - b.id);
  }
  
  // Function to sort the array by 'name'
  function sortByName(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // Step 1: Sort by id (ascending)
  let sortedById = sortById([...people]);  // Use spread operator to avoid mutating the original array
  console.log("Sorted by ID (ascending):");
  console.log(sortedById);
  
  // Step 2: Sort by name (alphabetically, ascending)
  let sortedByName = sortByName([...people]);  // Again, using spread to keep the original array intact
  console.log("\nSorted by Name (alphabetically, ascending):");
  console.log(sortedByName);
  
  // Additional: Sorting by id (descending)
  function sortByIdDescending(arr) {
    return arr.sort((a, b) => b.id - a.id);
  }
  
  // Sorting by 'id' descending
  let sortedByIdDesc = sortByIdDescending([...people]);
  console.log("\nSorted by ID (descending):");
  console.log(sortedByIdDesc);
  
  // Additional: Sorting by name (reverse alphabetical order)
  function sortByNameDescending(arr) {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
  }
  
  // Sorting by 'name' descending
  let sortedByNameDesc = sortByNameDescending([...people]);
  console.log("\nSorted by Name (reverse alphabetical):");
  console.log(sortedByNameDesc);
  