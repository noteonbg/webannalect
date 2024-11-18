const productionLines = [
    { name: "Line A", target: 1000, produced: 800 },
    { name: "Line B", target: 1200, produced: 950 },
    { name: "Line C", target: 1500, produced: 1500 },
    { name: "Line D", target: 900, produced: 600 }
];

productionLines.forEach(line => {
    console.log(`${line.name} produced ${line.produced} out of ${line.target}.`);
});

/*
he map() method creates a new array populated with the
 results of calling a provided function on every element 
 in the calling array.

*/
const efficiencies = productionLines.map(line => {
    return {
        name: line.name,
        efficiency: (line.produced / line.target) * 100
    };
});

console.log(efficiencies);

/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

*/
const underperformingLines = productionLines.filter(line => {
    return (line.produced / line.target) < 0.8; // Less than 80% efficiency
});

console.log("Underperforming Lines:", underperformingLines);

/*

The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
*/
const totalProduced = productionLines.reduce((total, line) => {
    return total + line.produced;
}, 0);

console.log(`Total Produced: ${totalProduced}`);


/*
const lineB = productionLines.find(line => line.name === "Line B");
console.log("Line B Details:", lineB);

*/
const lineB = productionLines.find(line => line.name === "Line B");
console.log("Line B Details:", lineB);


/*
The some() method tests whether at least one element in the
 array passes the test implemented by the provided function.

*/
const hasOverachievingLine = productionLines.some(line => {
    return (line.produced / line.target) > 1; // More than 100% efficiency
});
console.log(`Has overachieving line: ${hasOverachievingLine}`);

/*
The every() method tests whether all elements in the array
 pass the test implemented by the provided function.
*/
const allLinesMeetTarget = productionLines.every(line => {
    return line.produced >= line.target; // Checks if all lines meet or exceed their targets
});
console.log(`All lines meet their targets: ${allLinesMeetTarget}`);



