// A simple object representing a person

// A class representing a product
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

// Handler for the Proxy: define custom behavior for traps
let handler = {
    construct: function(target, args) {
        console.log(`Creating a new product with args:`, args);
        return new target(...args);  // Create the instance using the original constructor
    },
    get: function(target, prop, receiver) {
        console.log(`Accessing property ${prop}`);
        return prop in target ? target[prop] : undefined;
    },
    set: function(target, prop, value) {
        console.log(`Setting property ${prop} to ${value}`);
        target[prop] = value;
        return true;
    }
};

// Create the Proxy for the Product class
let ProxyProduct = new Proxy(Product, handler);

// Using the proxy class to create a new object
let product = new ProxyProduct('Laptop', 1200);  // Logs: Creating a new product with args: [ 'Laptop', 1200 ]

console.log(product.getPrice());  // Logs: Accessing property getPrice, then outputs: 1200

product.price = 1100;  // Logs: Setting property price to 1100
console.log(product.getPrice());  // Logs: Accessing property getPrice, then outputs: 1100


/*
let person = {
    name: 'abc',
    age: 30
};

// Handler for the Proxy: define custom behavior for traps
let handler = {
    get: function(target, prop) {
        console.log(`Getting ${prop}:`, target[prop]);
        return target[prop];  // Return the actual property value
    },
    set: function(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;  // Update the property
        return true;  // Indicate success
    }
};

// Create the Proxy
let proxyPerson = new Proxy(person, handler);

// Using the proxy object
console.log(proxyPerson.name);  // Logs: Getting name: abc, then outputs: abc
proxyPerson.age = 31;  // Logs: Setting age to 31
console.log(proxyPerson.age);  // Logs: Getting age: 31, then outputs: 31
*/



