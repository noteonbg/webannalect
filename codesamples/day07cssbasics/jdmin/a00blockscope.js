function example() {
    if (true) {
        let blockScopedVar = "I'm block scoped!";
        var functionScopedVar = "I'm function scoped!";
        console.log(blockScopedVar); // Outputs: I'm block scoped!
    }
    
    console.log(functionScopedVar); // Outputs: I'm function scoped!
    // console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
}

example();

/*

Hoisting
Hoisting is a JavaScript mechanism where variables
 and function declarations are moved to the top of their
  containing scope during the compilation phase.
   However, only the declarations are hoisted,
    not the initializations.

*/
console.log(myVar); // Outputs: undefined
var myVar = 5;
console.log(myVar); // Outputs: 5
/*
In this case, the variable declaration var
 myVar is hoisted to the top, but the assignment 
 myVar = 5 is not. This results in undefined being 
 logged the first time.

*/

/*

Hoisting with let and const:

*/
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet); // Outputs: 10
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 20;
console.log(myConst); // Outputs: 20

/*

The Temporal Dead Zone (TDZ) is a concept in JavaScript that 
refers to the period between the start of a block of code
 and the point where a variable is declared.
  During this time, if you try to access the variable,
   you'll encounter a ReferenceError.

Explanation
Hoisting: JavaScript hoists variable declarations 
(not initializations).
 For let and const, this means the variables are
  technically created in the environment but are not 
  accessible until the line where they are defined.

TDZ Duration: The TDZ lasts from the start of the block
 until the variable is declared.
  This applies to both let and const.

*/

function example() {
    console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
    let myVar = 5; // Declaration is here

    console.log(myVar); // Outputs: 5
}

example();


/*

let and const: Both types are affected by the TDZ. You cannot access them before their declaration.
var: Variables declared with var are hoisted, but they do not have a TDZ. You can access them before their declaration, but the value will be undefined.

*/
function example1() {
    console.log(myVar); // Outputs: undefined
    var myVar = 5; // Declaration and initialization

    console.log(myVar); // Outputs: 5
}

example1();


