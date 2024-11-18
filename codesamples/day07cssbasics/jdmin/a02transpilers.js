/*

Transpilers, such as Babel, convert modern JavaScript (ES6+)
 code into backward-compatible versions that can run
  in older environments

  Imagine you're building a web application for managing
   production lines. You want to utilize modern 
   JavaScript features for better readability and
    functionality but need to ensure compatibility 
    with older browsers.

*/

// production.js
class ProductionLine {
    constructor(name, target) {
        this.name = name;
        this.target = target;
        this.produced = 0;
    }

    produce(quantity = 1) {
        this.produced += quantity;
        console.log(`Produced ${quantity} units on ${this.name}. Total produced: ${this.produced}`);
    }

    getEfficiency() {
        return (this.produced / this.target) * 100;
    }
}

const lineA = new ProductionLine("Line A", 1000);
lineA.produce(200);
console.log(`Efficiency of ${lineA.name}: ${lineA.getEfficiency().toFixed(2)}%`);

//Transpiling the Code

/*

Install Babel: You would typically use npm to install Babel and the necessary presets:

bash

npm install --save-dev @babel/core @babel/cli @babel/preset-env

Configure Babel: Create a Babel configuration file (.babelrc) to
 specify that you want to use the preset-env:

Transpile the Code:
 Use the Babel CLI to transpile your code. For example,
  if your ES6 code is in production.js, you would run: 

npx babel production.js --out-file production.transpiled.js


// production.transpiled.js
"use strict";

function ProductionLine(name, target) {
    this.name = name;
    this.target = target;
    this.produced = 0;
}

ProductionLine.prototype.produce = function() {
    var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    this.produced += quantity;
    console.log("Produced " + quantity + " units on " + this.name + ". Total produced: " + this.produced);
};

ProductionLine.prototype.getEfficiency = function() {
    return this.produced / this.target * 100;
};

var lineA = new ProductionLine("Line A", 1000);
lineA.produce(200);
console.log("Efficiency of " + lineA.name + ": " + lineA.getEfficiency().toFixed(2) + "%");


Transpilers, such as Babel, convert modern JavaScript (ES6+) code into backward-compatible versions that can run in older environments. Here’s how you might use a transpiler in a manufacturing domain example.

Scenario: Using ES6+ Features in Manufacturing Management
Imagine you're building a web application for managing production lines. You want to utilize modern JavaScript features for better readability and functionality but need to ensure compatibility with older browsers.

Original ES6+ Code
Here’s an example of how you might write some ES6+ code for managing production data:

javascript
Copy code
// production.js
class ProductionLine {
    constructor(name, target) {
        this.name = name;
        this.target = target;
        this.produced = 0;
    }

    produce(quantity = 1) {
        this.produced += quantity;
        console.log(`Produced ${quantity} units on ${this.name}. Total produced: ${this.produced}`);
    }

    getEfficiency() {
        return (this.produced / this.target) * 100;
    }
}

const lineA = new ProductionLine("Line A", 1000);
lineA.produce(200);
console.log(`Efficiency of ${lineA.name}: ${lineA.getEfficiency().toFixed(2)}%`);
Transpiling the Code
To make this ES6+ code compatible with older browsers, you would run it through a transpiler like Babel. Here’s a general idea of how you would set up Babel:

Install Babel: You would typically use npm to install Babel and the necessary presets:

bash
Copy code
npm install --save-dev @babel/core @babel/cli @babel/preset-env
Configure Babel: Create a Babel configuration file (.babelrc) to specify that you want to use the preset-env:

json
Copy code
{
    "presets": ["@babel/preset-env"]
}
Transpile the Code: Use the Babel CLI to transpile your code. For example, if your ES6 code is in production.js, you would run:

bash
Copy code
npx babel production.js --out-file production.transpiled.js
Resulting Transpiled Code
The transpiled code in production.transpiled.js might look something like this:

javascript
Copy code
// production.transpiled.js
"use strict";

function ProductionLine(name, target) {
    this.name = name;
    this.target = target;
    this.produced = 0;
}

ProductionLine.prototype.produce = function() {
    var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    this.produced += quantity;
    console.log("Produced " + quantity + " units on " + this.name + ". Total produced: " + this.produced);
};

ProductionLine.prototype.getEfficiency = function() {
    return this.produced / this.target * 100;
};

var lineA = new ProductionLine("Line A", 1000);
lineA.produce(200);
console.log("Efficiency of " + lineA.name + ": " + lineA.getEfficiency().toFixed(2) + "%");

Observe the following
Class to Function: The class syntax is transformed into a constructor function with prototype methods.
Default Parameters: The default parameter syntax is replaced with a standard check for the existence of the argument.
Template Literals: Template literals are replaced with string concatenation.

*/





