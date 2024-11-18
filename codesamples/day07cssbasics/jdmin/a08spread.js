/*

The spread operator in JavaScript,
 represented by ..., allows you to expand an iterable 
 (like an array or an object) into individual elements. 
 This is particularly useful for merging arrays, copying arrays,
  and spreading object properties.
*/

const morningShift = [200, 300, 250];
const eveningShift = [150, 400, 300];

// Merging the arrays using the spread operator
const totalProduction = [...morningShift, ...eveningShift];

console.log("Total Production for the Day:", totalProduction); // Outputs: Total Production for the Day: [200, 300, 250, 150, 400, 300]


const originalProduction = [100, 200, 300];
const copiedProduction = [...originalProduction];

console.log("Copied Production:", copiedProduction); // Outputs: Copied Production: [100, 200, 300]

// Modifying the original array does not affect the copied array
originalProduction.push(400);
console.log("Original Production:", originalProduction); // Outputs: Original Production: [100, 200, 300, 400]
console.log("Copied Production after modification:", copiedProduction); // Outputs: Copied Production after modification: [100, 200, 300]

const lineA = {
    name: "Line A",
    target: 1000,
    produced: 800
};

const lineB = {
    name: "Line B",
    target: 1200,
    produced: 950
};

// Merging objects using the spread operator
const productionReport = {
    ...lineA,
    ...lineB,
    totalProduced: lineA.produced + lineB.produced
};

console.log("Production Report:", productionReport);
/* Outputs:
Production Report: {
  name: 'Line B',
  target: 1200,
  produced: 950,
  totalProduced: 1750
}
*/

const updatedLineA = {
    ...lineA,
    produced: 850 // Update the produced value
};

console.log("Updated Line A:", updatedLineA);
/* Outputs:
Updated Line A: {
  name: 'Line A',
  target: 1000,
  produced: 850
}
*/
