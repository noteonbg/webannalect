//we can use let and const to define variables for products and production lines.
const productionLine = "Line A"; // Unchanging value
let dailyProduction = 100; // This value can change
dailyProduction += 50; // Update daily production

//Arrow functions provide a concise syntax for writing functions, especially useful for callbacks.
const calculateEfficiency = (produced, target) =>
     (produced / target) * 100;

const efficiency = calculateEfficiency(150, 200);
console.log(`Efficiency: ${efficiency}%`);

//Template literals allow for easier string interpolation, useful for generating reports or logs.
const product = "Widget";
const quantity = 200;
console.log(`Produced ${quantity} units of ${product}.`);


const productionReport = {
    product: "Gadget",
    quantity: 300,
    date: "2024-10-09"
};

// Destructuring Assignment
const { product, quantity } = productionReport;
console.log(`On ${productionReport.date}, produced ${quantity} units of ${product}.`);

/*
Default parameters allow for setting default values for function arguments, making function calls more flexible.
*/
const produce = (product, quantity = 1) => {
    console.log(`Producing ${quantity} unit(s) of ${product}.`);
};

produce("Gadget"); // Uses default quantity of 1
produce("Widget", 5); // Overrides with 5

/*
The spread operator can be used to merge arrays, which is useful for consolidating production data
*/

const lineAProduction = [100, 200, 150];
const lineBProduction = [120, 180, 160];

const totalProduction = [...lineAProduction, ...lineBProduction];
console.log(`Total production: ${totalProduction.reduce((a, b) => a + b)} units.`);


/*

7. Promises

*/
const fetchProductionData = () => {
    return new Promise((resolve, reject) => {
        const data = { produced: 250, target: 300 };
        // Simulate success
        resolve(data);
    });
};


/*
Promises are crucial for handling asynchronous operations,
 such as fetching production data from a server.
*/
fetchProductionData()
    .then(data => {
        const efficiency = calculateEfficiency(data.produced, data.target);
        console.log(`Fetched data: Efficiency is ${efficiency}%`);
    })
    .catch(error => console.error("Error fetching data:", error));


 /*
  Classes
 */

  class Product {
    constructor(name, targetQuantity) {
        this.name = name;
        this.targetQuantity = targetQuantity;
        this.producedQuantity = 0;
    }

    produce(quantity) {
        this.producedQuantity += quantity;
    }

    efficiency() {
        return calculateEfficiency(this.producedQuantity, this.targetQuantity);
    }
}

const widget = new Product("Widget", 500);
widget.produce(300);
console.log(`Widget efficiency: ${widget.efficiency()}%`);
