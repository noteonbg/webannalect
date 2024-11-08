// Global scope - Variables accessible anywhere in the script
let factoryName = "SuperWidgets Factory"; // Global variable
let totalWidgetsProduced = 0; // Global variable

// 1. Function Scope Example
function produceWidgets(batchSize) {
    let widgetsInBatch = batchSize; // Variable scoped to this function

    // Simulating production of widgets
    totalWidgetsProduced += widgetsInBatch;
    console.log(`${widgetsInBatch} widgets produced in this batch.`);

    // Accessing the global variable inside the function
    console.log(`Total widgets produced so far: ${totalWidgetsProduced}`);

    // 2. Block Scope Example (Inside 'if' block using let)
    if (widgetsInBatch > 100) {
        let bonusWidgets = 50; // Block-scoped variable inside 'if'
        console.log(`Bonus: Producing ${bonusWidgets} extra widgets as a bonus.`);
    }

    // Uncommenting the following line would cause an error because bonusWidgets is block-scoped
    // console.log(bonusWidgets); // Error: bonusWidgets is not defined outside the block
}

// Calling the function to simulate production
produceWidgets(150);

// 3. Another function with its own function scope
function qualityControl() {
    let defectiveWidgets = 10; // Scoped to the qualityControl function
    console.log(`${defectiveWidgets} widgets failed quality control.`);
    console.log(`Total widgets produced: ${totalWidgetsProduced}`); // Accessing global variable
}

// Calling the quality control function
qualityControl();

// 4. Block Scope Example (Inside a loop)
for (let i = 0; i < 3; i++) {
    let batchSize = 200;  // Block-scoped variable inside the loop
    console.log(`Batch ${i + 1}: Producing ${batchSize} widgets.`);
    totalWidgetsProduced += batchSize;
}

// 5. Global Scope Example: Accessing global variables directly
console.log(`Final count of total widgets produced: ${totalWidgetsProduced}`);
console.log(`Factory name: ${factoryName}`);
