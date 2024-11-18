const productionLine = {
    name: "Line A",
    target: 1000,
    produced: 750,
    efficiency() {
        return (this.produced / this.target) * 100;
    }
};

// Destructuring
const { name, target, produced, efficiency } = productionLine;

console.log(`Production Line: ${name}`);
console.log(`Target: ${target}`);
console.log(`Produced: ${produced}`);
console.log(`Efficiency: ${efficiency().toFixed(2)}%`);


const productionData = [200, 250, 300]; // Units produced in different shifts

// Destructuring
/*
In manufacturing, you might have an object representing a
 production line with various properties.
  Destructuring helps you extract these properties easily.
  
*/
const [firstShift, secondShift, thirdShift] = productionData;

console.log(`First Shift: ${firstShift} units`);
console.log(`Second Shift: ${secondShift} units`);
console.log(`Third Shift: ${thirdShift} units`);


const factory = {
    name: "ABC Manufacturing",
    productionLine: {
        name: "Line A",
        target: 1000,
        produced: 750
    }
};

// Nested destructuring
/*

In a more complex scenario,
 you might have nested objects.
  Destructuring can simplify accessing these nested values.

*/
const {
    name: factoryName,
    productionLine: { name: lineName, target, produced }
} = factory;

console.log(`Factory: ${factoryName}`);
console.log(`Production Line: ${lineName}`);
console.log(`Target: ${target}`);
console.log(`Produced: ${produced}`);

const machine = {
    name: "CNC Machine",
    status: "Operational"
};

/*
Destructuring also allows you to set default values,
 which is useful when some properties may be missing.
*/
// Destructuring with default value
const { name, status, temperature = 25 } = machine;

console.log(`Machine: ${name}`);
console.log(`Status: ${status}`);
console.log(`Temperature: ${temperature}°C`); // Defaults to 25 if not specified
