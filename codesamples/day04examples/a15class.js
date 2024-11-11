// Base class for products
class Product {
    constructor(id, name, category, price) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.price = price;
      this.manufacturingDate = new Date();
    }
  
    // Method to display product details
    displayProductDetails() {
      console.log(`Product ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Category: ${this.category}`);
      console.log(`Price: $${this.price}`);
      console.log(`Manufactured on: ${this.manufacturingDate.toDateString()}`);
    }
  
    // Method to calculate the discount based on category
    applyDiscount() {
      let discount = 0;
      if (this.category === 'Electronics') {
        discount = 0.1; // 10% discount on electronics
      } else if (this.category === 'Furniture') {
        discount = 0.05; // 5% discount on furniture
      }
      return this.price - (this.price * discount);
    }
  }
  
  // Subclass for Electronics, which extends Product
  class Electronics extends Product {
    constructor(id, name, category, price, warrantyPeriod) {
      super(id, name, category, price);  // Calling the parent class constructor
      this.warrantyPeriod = warrantyPeriod;  // Additional property for electronics
    }
  
    // Override displayProductDetails to include warranty period
    displayProductDetails() {
      super.displayProductDetails();  // Call the parent method
      console.log(`Warranty Period: ${this.warrantyPeriod} years`);
    }
  
    // Method to check if warranty is valid
    isWarrantyValid() {
      const currentYear = new Date().getFullYear();
      const warrantyExpiryYear = this.manufacturingDate.getFullYear() + this.warrantyPeriod;
      return warrantyExpiryYear >= currentYear;
    }
  }
  
  // Subclass for Furniture, which extends Product
  class Furniture extends Product {
    constructor(id, name, category, price, material) {
      super(id, name, category, price);
      this.material = material;  // Additional property for furniture
    }
  
    // Override displayProductDetails to include material type
    displayProductDetails() {
      super.displayProductDetails();  // Call the parent method
      console.log(`Material: ${this.material}`);
    }
  
    // Method to calculate the shipping cost for furniture (based on size)
    calculateShippingCost() {
      if (this.material === 'Wood') {
        return 50;  // Shipping cost for wooden furniture
      } else if (this.material === 'Metal') {
        return 75;  // Shipping cost for metal furniture
      }
      return 30;  // Default shipping cost
    }
  }
  
  // Manufacturing Process
  class Manufacturing {
    constructor() {
      this.products = [];
    }
  
    // Method to add a new product
    addProduct(product) {
      this.products.push(product);
    }
  
    // Method to display all products and apply discounts
    displayAllProducts() {
      this.products.forEach(product => {
        product.displayProductDetails();
        console.log(`Discounted Price: $${product.applyDiscount().toFixed(2)}\n`);
      });
    }
  }
  
  // Example Usage
  
  // Create an instance of Manufacturing
  const manufacturingProcess = new Manufacturing();
  
  // Create instances of different products
  const phone = new Electronics(101, 'Smartphone', 'Electronics', 599, 2);
  const chair = new Furniture(102, 'Office Chair', 'Furniture', 150, 'Wood');
  const laptop = new Electronics(103, 'Laptop', 'Electronics', 1200, 3);
  
  // Add products to the manufacturing process
  manufacturingProcess.addProduct(phone);
  manufacturingProcess.addProduct(chair);
  manufacturingProcess.addProduct(laptop);
  
  // Display all product details and their discounted prices
  manufacturingProcess.displayAllProducts();
  
  // Check if the warranty of the laptop is still valid
  console.log(`Is the laptop warranty valid? ${laptop.isWarrantyValid() ? 'Yes' : 'No'}`);
  