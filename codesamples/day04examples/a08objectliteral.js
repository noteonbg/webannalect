// --- 1. Object Literal Example ---

// Defining a single product using object literal
let productLiteral = {
    name: 'Smartphone',
    brand: 'TechCorp',
    price: 799,
    category: 'Electronics',
    
    // Method to display product info
    displayInfo: function() {
       // return `${this.name} by ${this.brand}, priced at $${this.price}, belongs to ${this.category}.`;
       console.log(123);
    }
};




// Accessing properties and calling the method on the object literal
console.log("Object Literal Product Info:");
console.log(productLiteral.displayInfo()); // Output: Smartphone by TechCorp, priced at $799, belongs to Electronics.
console.log("");

// --- 2. Object Constructor Example ---

// Constructor function for Product
function Product(name, brand, price, category) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.category = category;
    
    // Method inside constructor to display product info
    this.displayInfo = function() {
        return `${this.name} by ${this.brand}, priced at $${this.price}, belongs to ${this.category}.`;
    };
}




// Creating multiple products using the constructor
let product1 = new Product('Smartwatch', 'FitTech', 199, 'Electronics');
let product2 = new Product('Laptop', 'InnoTech', 1200, 'Computers');
let product3 = new Product('Coffee Maker', 'BrewMaster', 89, 'Home Appliances');

// Displaying product information for each object created by the constructor
console.log("Object Constructor Product Info:");
console.log(product1.displayInfo()); // Output: Smartwatch by FitTech, priced at $199, belongs to Electronics.
console.log(product2.displayInfo()); // Output: Laptop by InnoTech, priced at $1200, belongs to Computers.
console.log(product3.displayInfo()); // Output: Coffee Maker by BrewMaster, priced at $89, belongs to Home Appliances.
console.log("");

// --- 3. Using a Loop to Create Products with the Constructor ---

// Array of product data
let productData = [
    { name: 'Tablet', brand: 'MegaTech', price: 499, category: 'Electronics' },
    { name: 'Blender', brand: 'BlendMaster', price: 49, category: 'Home Appliances' },
    { name: 'Smart TV', brand: 'Visionary', price: 899, category: 'Electronics' }
];

// Creating an array of Product objects using the constructor in a loop
let productBatch = [];
for (let i = 0; i < productData.length; i++) {
    let product = new Product(productData[i].name, productData[i].brand, productData[i].price, productData[i].category);
    productBatch.push(product);
}

// Displaying info for each product in the batch
console.log("Product Batch Info (Created in a Loop):");
productBatch.forEach(function(product) {
    console.log(product.displayInfo());
});
