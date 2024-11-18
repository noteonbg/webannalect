// production.js

// Function to calculate production efficiency
export function calculateEfficiency(produced, target) {
    if (target === 0) return 0;
    return (produced / target) * 100;
}

// Function to log production
export function logProduction(lineName, produced, target) {
    const efficiency = calculateEfficiency(produced, target);
    console.log(`Production Line: ${lineName}`);
    console.log(`Produced: ${produced}, Target: ${target}`);
    console.log(`Efficiency: ${efficiency.toFixed(2)}%`);
}
