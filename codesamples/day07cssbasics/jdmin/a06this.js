/*
In object methods, this refers to the object itself.

*/

const productionLine = {
    name: "Line A",
    target: 1000,
    produced: 800,
    efficiency() {
        return (this.produced / this.target) * 100;
    }
};

console.log(`Efficiency of ${productionLine.name}: ${productionLine.efficiency().toFixed(2)}%`);


/*

When using a constructor function,
 this refers to the instance being created
*/
function ProductionLine(name, target) {
    this.name = name;
    this.target = target;
    this.produced = 0;

    this.efficiency = function() {
        return (this.produced / this.target) * 100;
    };
}

const lineB = new ProductionLine("Line B", 1200);
lineB.produced = 900;

console.log(`Efficiency of ${lineB.name}: ${lineB.efficiency().toFixed(2)}%`);


/*

With ES6 classes, this behaves similarly to constructor functions, referring to the instance of the class.
*/

class ProductionLine {
    constructor(name, target) {
        this.name = name;
        this.target = target;
        this.produced = 0;
    }

    produce(quantity) {
        this.produced += quantity;
    }

    efficiency() {
        return (this.produced / this.target) * 100;
    }
}

const lineC = new ProductionLine("Line C", 1500);
lineC.produce(1500);

console.log(`Efficiency of ${lineC.name}: ${lineC.efficiency().toFixed(2)}%`);

/*
this in Event Handlers

In event handlers, this usually refers to the element that 
triggered the event, unless it’s an arrow function.

*/

const productionLineButton = {
    name: "Line A",
    target: 1000,
    produced: 0,
    efficiency: function() {
        console.log(`Efficiency: ${(this.produced / this.target * 100).toFixed(2)}%`);
    },
    produceUnits: function() {
        this.produced += 100;
        this.efficiency();
    }
};

// Simulate button click
productionLineButton.produceUnits(); // Outputs: Efficiency: 10.00%

/*

5. Arrow Functions and this
Arrow functions do not have their own this context; they inherit this from the parent scope.
*/

class ProductionLine {
    constructor(name, target) {
        this.name = name;
        this.target = target;
        this.produced = 0;
    }

    produce(quantity) {
        this.produced += quantity;
        const logEfficiency = () => {
            console.log(`Efficiency of ${this.name}: ${(this.produced / this.target * 100).toFixed(2)}%`);
        };
        logEfficiency();
    }
}

const lineD = new ProductionLine("Line D", 900);
lineD.produce(300); // Outputs: Efficiency of Line D: 33.33%

/*

Understanding how this works in different contexts is crucial in
 JavaScript, especially when managing objects and methods 
 in a manufacturing application. It allows you to refer to
  the current instance or object, ensuring that your methods 
  operate on the intended data.

*/