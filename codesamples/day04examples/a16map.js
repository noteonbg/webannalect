// Creating a new Map
const productMap = new Map();

// Adding key-value pairs to the Map
productMap.set(101, { name: "Laptop", price: 1200 });
productMap.set(102, { name: "Smartphone", price: 600 });
productMap.set(103, { name: "Tablet", price: 450 });
productMap.set("isAvailable", true);  // A non-number key

console.log("Product Map:", productMap);

// 1. Getting values by key
const laptop = productMap.get(101);
console.log("Laptop Details:", laptop);  // { name: 'Laptop', price: 1200 }

const isAvailable = productMap.get("isAvailable");
console.log("Is Available:", isAvailable);  // true

// 2. Checking if a key exists
console.log("Has key 102?", productMap.has(102));  // true
console.log("Has key 104?", productMap.has(104));  // false

// 3. Getting the size of the Map
console.log("Size of productMap:", productMap.size);  // 4 (4 key-value pairs)

// 4. Iterating over Map with forEach
productMap.forEach((value, key) => {
  console.log(`Product ID: ${key}, Product Details:`, value);
});

// 5. Deleting an element by key
productMap.delete(103);  // Remove the product with ID 103
console.log("After deletion, productMap:", productMap);

// 6. Clearing all elements from the Map
// productMap.clear();  // Uncomment this to remove all entries from the map
// console.log("After clearing, productMap:", productMap);

// 7. Using a Map with Objects as Keys
const productA = { name: "Monitor" };
const productB = { name: "Keyboard" };

const salesMap = new Map();
salesMap.set(productA, 15);  // 15 units sold
salesMap.set(productB, 25);  // 25 units sold

console.log("Sales Map:", salesMap);

// Accessing the value by object key
console.log("Units sold for Monitor:", salesMap.get(productA));  // 15
console.log("Units sold for Keyboard:", salesMap.get(productB));  // 25

// 8. Iterating over Map using for...of
console.log("Iterating over Map:");
for (let [key, value] of productMap) {
  console.log(`Key: ${key}, Value: ${JSON.stringify(value)}`);
}

// 9. Using Map with default values for non-existing keys
const productPrices = new Map([
  ["Laptop", 1000],
  ["Smartphone", 600],
  ["Tablet", 400]
]);

// Get price of an existing product
console.log("Price of Laptop:", productPrices.get("Laptop"));  // 1000

// Get price of a non-existing product (using a default value)
console.log("Price of Watch:", productPrices.get("Watch") || "Not Available");  // Not Available
