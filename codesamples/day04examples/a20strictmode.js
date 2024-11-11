// Example 1: Enabling Strict Mode Globally
"use strict";

/*

Strict Mode enforces stricter syntax rules and throws errors for problematic 
behaviors 
that would normally be silently ignored in non-strict mode.
It helps prevent common coding pitfalls, improves security, and can make code
easier to optimize for JavaScript engines.

*/

// Attempting to use an undeclared variable (this will throw an error)
try {
  x = 10;  // ReferenceError: x is not defined
  console.log(x);
} catch (e) {
  console.log("Error in strict mode (undeclared variable):", e.message);
}

// Example 2: Enabling Strict Mode in a Function
function myFunction() {
  "use strict";  // Strict mode only applies within this function

  // Trying to assign a value to an undeclared variable
  try {
    y = 20;  // ReferenceError: y is not defined
  } catch (e) {
    console.log("Error in function (undeclared variable):", e.message);
  }
}

myFunction();

// Example 3: Examples of Strict Mode Restrictions

// 3.1. Assigning to an Undeclared Variable
try {
  z = 5;  // ReferenceError: z is not defined
} catch (e) {
  console.log("Error (assigning to undeclared variable):", e.message);
}

// 3.2. Deleting a Variable, Function, or Object Property
try {
  var myVar = 10;
  delete myVar;  // SyntaxError: Delete of an unqualified identifier in strict mode.
} catch (e) {
  console.log("Error (deleting a variable):", e.message);
}

// 3.3. Duplicate Property Names or Parameter Names
try {
  var obj = {
    prop: 1,
    prop: 2  // SyntaxError: Duplicate data property in object literal not allowed in strict mode
  };
} catch (e) {
  console.log("Error (duplicate property):", e.message);
}

// 3.4. Duplicate Parameter Names in Function
try {
  function myFunc(a, a) {  // SyntaxError: Duplicate parameter name not allowed in this context
    return a;
  }
  myFunc(1, 2);
} catch (e) {
  console.log("Error (duplicate parameter):", e.message);
}

// 3.5. Using `eval` and `arguments`
try {
  eval('var x = 10');  // No problem, but `x` is confined to the eval's scope
  arguments = 20;  // SyntaxError: Invalid left-hand side in assignment
} catch (e) {
  console.log("Error (invalid `arguments` assignment):", e.message);
}

// 3.6. `this` Behavior in Strict Mode
function showThis() {
  console.log(this);  // `this` will be `undefined`
}

showThis();  // undefined

// Example 4: Common Error Without Strict Mode (Silent Failures)

(function() {
  // Non-strict mode (if we remove "use strict"; here, the variables below will silently be created)
  x = 20;  // This will not throw an error and `x` becomes a global variable

  function doSomething() {
    y = 30;  // This silently creates a global variable `y`
  }

  doSomething();

  console.log("Non-strict x:", x);  // 20
  console.log("Non-strict y:", y);  // 30
})();

// Example of Strict Mode Effects: Silent Failures Prevented
(function() {
  "use strict";
  try {
    // In strict mode, assigning to undeclared variable will throw an error
    z = 40;  // ReferenceError: z is not defined
  } catch (e) {
    console.log("Error (strict mode undeclared variable):", e.message);
  }
})();
