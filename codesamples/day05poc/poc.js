// Sample Array of Product objects
const products = [
    { id: 1, name: 'Screwdriver', category: 'Tools', price: 10.5, quantity: 150, dateAdded: new Date('2023-01-01') },
    { id: 2, name: 'Hammer', category: 'Tools', price: 12.75, quantity: 120, dateAdded: new Date('2023-02-15') },
    { id: 3, name: 'Wrench', category: 'Tools', price: 15.0, quantity: 200, dateAdded: new Date('2023-03-10') },
    { id: 4, name: 'Drill', category: 'Power Tools', price: 55.0, quantity: 80, dateAdded: new Date('2023-05-25') },
    { id: 5, name: 'Nail Gun', category: 'Power Tools', price: 90.0, quantity: 50, dateAdded: new Date('2023-06-30') },
    { id: 6, name: 'Saw', category: 'Tools', price: 20.0, quantity: 100, dateAdded: new Date('2023-04-20') },
    { id: 7, name: 'Laser Cutter', category: 'Machines', price: 500.0, quantity: 15, dateAdded: new Date('2023-07-15') },
    { id: 8, name: 'Band Saw', category: 'Machines', price: 250.0, quantity: 25, dateAdded: new Date('2023-08-05') }
  ];
  
  // 1. Sorting by Price (ascending) spread operator to create a new array 
  const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
  console.log('Sorted by Price (Ascending):', sortedByPrice);
  
  // 2. Sorting by Quantity (descending)
  const sortedByQuantity = [...products].sort((a, b) => b.quantity - a.quantity);
  console.log('Sorted by Quantity (Descending):', sortedByQuantity);
  
  // 3. Sorting by Date Added (ascending)
  const sortedByDateAdded = [...products].sort((a, b) => a.dateAdded - b.dateAdded);
  console.log('Sorted by Date Added (Ascending):', sortedByDateAdded);
  
  // 4. Search: Find all products in a specific category (e.g., 'Tools')
  const toolsCategory = products.filter(product => product.category === 'Tools');
  console.log('Products in Tools Category:', toolsCategory);
  
  // 5. Search: Find products with price less than a certain value (e.g., 30)
  const affordableProducts = products.filter(product => product.price < 30);
  console.log('Affordable Products (Price < 30):', affordableProducts);
  
  // 6. Search: Find product by name (e.g., 'Hammer')
  const hammerProduct = products.find(product => product.name === 'Hammer');
  console.log('Product with name "Hammer":', hammerProduct);
  
  // 7. Search: Find products with quantity greater than a certain value (e.g., 100)
  const highQuantityProducts = products.filter(product => product.quantity > 100);
  console.log('Products with Quantity > 100:', highQuantityProducts);
  
  // 8. Complex Search: Find products by category and price range
  const powerToolsUnder100 = products.filter(product => product.category === 'Power Tools' && product.price < 100);
  console.log('Power Tools under 100:', powerToolsUnder100);
  