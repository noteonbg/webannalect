// Outer function: Factory that generates product IDs
function createProductFactory() {
    let productId = 0;  // `productId` is closed over by the inner function
  
    // Inner function: Generates a new product with a unique ID
    return function(productName) {
      productId++;  // Increment the product ID each time a new product is created
      return {
        id: productId,
        name: productName
      };
    };
  }
  
  // Creating a factory instance
  const factory = createProductFactory();
  
  // Creating new products using the factory
  const product1 = factory("Widget A");
  const product2 = factory("Widget B");
  const product3 = factory("Widget C");
  
  console.log(product1);  // { id: 1, name: 'Widget A' }
  console.log(product2);  // { id: 2, name: 'Widget B' }
  console.log(product3);  // { id: 3, name: 'Widget C' }
  
  // The closure allows each call to remember the `productId` state
  