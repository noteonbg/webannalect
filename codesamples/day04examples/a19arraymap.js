// Step 1: Define an array of product objects
const products = [
  { id: 101, name: 'Laptop', category: 'Electronics', price: 1200 },
  { id: 102, name: 'Smartphone', category: 'Electronics', price: 600 },
  { id: 103, name: 'Office Chair', category: 'Furniture', price: 150 },
  { id: 104, name: 'Dining Table', category: 'Furniture', price: 400 },
  { id: 105, name: 'Washing Machine', category: 'Appliances', price: 700 }
];



// Step 2: Apply a 10% discount on all products using `map()`
const discountedProducts = products.map(product => {
  // Create a new object to avoid mutating the original product
  const discountedProduct = { ...product };  // a way to make a copy of the prodect
  discountedProduct.price -= discountedProduct.price * 0.10;  // Apply 10% discount
  return discountedProduct;
});

console.log('Discounted Products:', discountedProducts);

// Step 3: Create a new array of product names using `map()`
const productNames = products.map(product => product.name);
console.log('Product Names:', productNames);





// Step 4: Add a new field `isAvailable` based on certain conditions
const productsWithAvailability = products.map(product => {
  const updatedProduct = { ...product };
  // Assuming availability is based on price (if price > 500, it's available)
  updatedProduct.isAvailable = updatedProduct.price > 500;
  return updatedProduct;
});

console.log('Products with Availability:', productsWithAvailability);





// Step 5: Chain `map()` to perform multiple transformations
const finalProductDetails = products
  .map(product => ({ ...product, price: product.price * 0.9 }))  // Apply 10% discount
  .map(product => ({ ...product, isAvailable: product.price > 500 }));  // Add availability

console.log('Final Product Details:', finalProductDetails);
