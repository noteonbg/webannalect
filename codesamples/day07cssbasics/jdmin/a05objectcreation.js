const productionLine = {
    name: "Line A",
    target: 1000,
    produced: 800,
    efficiency() {
        return (this.produced / this.target) * 100;
    }
};

console.log(`Production Line: ${productionLine.name}`);
console.log(`Efficiency: ${productionLine.efficiency().toFixed(2)}%`);


function AnotherProductionLine(name, target) {
    this.name = name;
    this.target = target;
    this.produced = 0;
    this.efficiency = function() {
        return (this.produced / this.target) * 100;
    };
}

const lineB = new AnotherProductionLine("Line B", 1200);
lineB.produced = 900;

console.log(`Production Line: ${lineB.name}`);
console.log(`Efficiency: ${lineB.efficiency().toFixed(2)}%`);


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

/*
//ES6 clss syntax.
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

console.log(`Production Line: ${lineC.name}`);
console.log(`Efficiency: ${lineC.efficiency().toFixed(2)}%`);

*/

const linePrototype = {
    produce(quantity) {
        this.produced += quantity;
    },
    efficiency() {
        return (this.produced / this.target) * 100;
    }
};

const lineD = Object.create(linePrototype);
lineD.name = "Line D";
lineD.target = 900;
lineD.produced = 400;

console.log(`Production Line: ${lineD.name}`);
console.log(`Efficiency: ${lineD.efficiency().toFixed(2)}%`);

/*

A factory function returns a new object each time it's called,
 making it a good alternative to constructor functions.
*/

function createProductionLineFactory(name, target) {
    return {
        name,
        target,
        produced: 0,
        produce(quantity) {
            this.produced += quantity;
        },
        efficiency() {
            return (this.produced / this.target) * 100;
        }
    };
}

const lineE = createProductionLine("Line E", 1100);
lineE.produce(800);

console.log(`Production Line: ${lineE.name}`);
console.log(`Efficiency: ${lineE.efficiency().toFixed(2)}%`);

