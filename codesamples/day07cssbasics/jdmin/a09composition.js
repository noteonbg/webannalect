/*

Composition is a design principle in JavaScript that allows you
 to build complex functionality by combining simpler,
  reusable components. 

*/

// Function to manage production
const productionManagement = (target) => {
    let produced = 0;

    return {
        produce(quantity) {
            produced += quantity;
            console.log(`Produced ${quantity} units. Total produced: ${produced}`);
        },
        getEfficiency() {
            return (produced / target) * 100;
        },
        resetProduction() {
            produced = 0;
            console.log("Production reset.");
        }
    };
};

// Function to manage maintenance
const maintenanceManagement = () => {
    let maintenanceLog = [];

    return {
        logMaintenance(date, description) {
            maintenanceLog.push({ date, description });
            console.log(`Logged maintenance on ${date}: ${description}`);
        },
        getMaintenanceLog() {
            return maintenanceLog;
        }
    };
};


// use above functions to create a composite object that represents 
//a production line.
const createProductionLine = (name, target) => {
    const production = productionManagement(target);
    const maintenance = maintenanceManagement();

    return {
        name,
        target,
        production,
        maintenance,
        report() {
            console.log(`Production Line: ${this.name}`);
            console.log(`Target: ${this.target}`);
            console.log(`Efficiency: ${this.production.getEfficiency().toFixed(2)}%`);
        }
    };
};

// Example usage
const lineA = createProductionLine("Line A", 1000);
lineA.production.produce(600);
lineA.maintenance.logMaintenance("2024-10-01", "Replaced filter");
lineA.report();

// Outputs:
// Produced 600 units. Total produced: 600
// Logged maintenance on 2024-10-01: Replaced filter
// Production Line: Line A
// Target: 1000
// Efficiency: 60.00%
