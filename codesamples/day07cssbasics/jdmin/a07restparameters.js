/*

Rest parameters in JavaScript allow you to represent an
 indefinite number of arguments as an array.

 Function Declaration: The calculateTotalProduction function takes a lineName as its first argument, followed by a rest parameter ...shifts. This allows you to pass any number of production values for different shifts.

Using reduce(): Inside the function, the reduce() method is used to calculate the total production by summing up all the values in the shifts array.

Logging the Result: The result is logged to the console, showing the total production for the specified line.

*/

function calculateTotalProduction(lineName, ...shifts) {
    const totalProduced = shifts.reduce((total, shift) => total + shift, 0);
    console.log(`Total production for ${lineName}: ${totalProduced} units`);
}

// Example usage
calculateTotalProduction("Line A", 200, 300, 150, 250); // Outputs: Total production for Line A: 900 units
calculateTotalProduction("Line B", 300, 400); // Outputs: Total production for Line B: 700 units


function reportProduction(lineName, ...dailyProductions) {
    const totalProduction = dailyProductions.reduce((total, production) => total + production, 0);
    const averageProduction = totalProduction / dailyProductions.length;

    console.log(`Production Report for ${lineName}:`);
    console.log(`Total Production: ${totalProduction} units`);
    console.log(`Average Daily Production: ${averageProduction.toFixed(2)} units`);
}

// Example usage
reportProduction("Line C", 250, 300, 200, 400); 
// Outputs:
// Production Report for Line C:
// Total Production: 1150 units
// Average Daily Production: 287.50 units

