// Manufacturing products data as an array of objects
const products = [
    { id: 101, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 102, name: 'Smartphone', category: 'Electronics', price: 600 },
    { id: 103, name: 'Office Chair', category: 'Furniture', price: 150 },
    { id: 104, name: 'Dining Table', category: 'Furniture', price: 400 },
    { id: 105, name: 'Washing Machine', category: 'Appliances', price: 700 }
  ];
  
  // Step 1: Create a Map to store the products by their ID
  const productMap = new Map();
  
  // Populate the Map with product data
  products.forEach(product => {
    productMap.set(product.id, product);
  });
  
  // Step 2: Apply discounts based on category using Map
  const applyDiscount = (category, discountPercentage) => {
    productMap.forEach((product, id) => {
      if (product.category === category) {
        product.price -= product.price * (discountPercentage / 100);
      }
    });
  };
  
  // Apply a 10% discount on Electronics and a 5% discount on Furniture
  applyDiscount('Electronics', 10);
  applyDiscount('Furniture', 5);
  
  // Step 3: Filter products by category (Electronics and Furniture) and get details
  const filterByCategory = (category) => {
    const filteredProducts = [];
    productMap.forEach((product, id) => {
      if (product.category === category) {
        filteredProducts.push(product);
      }
    });
    return filteredProducts;
  };
  
  // Filter Electronics products
  const electronics = filterByCategory('Electronics');
  console.log('Electronics Products:', electronics);
  
  // Filter Furniture products
  const furniture = filterByCategory('Furniture');
  console.log('Furniture Products:', furniture);
  
  // Step 4: Calculate the total cost of all products
  const calculateTotalCost = () => {
    let total = 0;
    productMap.forEach((product) => {
      total += product.price;
    });
    return total;
  };
  
  // Calculate the total cost of all products in the Map
  const totalCost = calculateTotalCost();
  console.log('Total cost of all products:', totalCost.toFixed(2));
  
  // Step 5: Display all products with their updated prices after discount
  console.log('Updated Product Details After Discount:');
  productMap.forEach((product, id) => {
    console.log(`ID: ${id}, Name: ${product.name}, Category: ${product.category}, Price: $${product.price.toFixed(2)}`);
  });
  