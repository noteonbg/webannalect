/*

generator method in JavaScript is a special type of 
function that allows you to define an iterative algorithm 
by using the function* syntax.
 Generators can pause execution and yield
  multiple values over time, rather than
   returning a single value. This makes them useful for creating iterable sequences, managing asynchronous operations, and implementing complex stateful logic.

Key Features of Generators
Yielding Values: 
The yield keyword is used to pause the execution of
 the generator and return a value.
  The generator can be resumed later from where it left off.

Iterator Protocol: Generators automatically implement the
 iterator protocol, which means they have a next()
  method that returns an object containing value and done properties.

Stateful: Generators maintain their own context and state
 between calls, making them useful for scenarios 
 that require maintaining state across multiple invocations

*/

// Define a generator function
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Create a generator object
  const gen = myGenerator();
  
  // Get the first value from the generator
  const result = gen.next();
  
  // Log the value
  console.log(result.value); // Output: 1

  

function* productionLineGenerator() {
    let batchNumber = 1;

    while (batchNumber <= 5) {
        // Simulate producing a batch
        const producedItems = Math.floor(Math.random() * 100) + 1; // Random number of produced items
        yield `Batch ${batchNumber}: ${producedItems} items produced`;
        batchNumber++;
    }
}

const productionLine = productionLineGenerator();

// Using the generator to get batches of production

console.log(productionLine.next());
console.log(productionLine.next());


/*

Generator Function: The productionLineGenerator function is defined using the function* syntax. Inside it, we have a loop that simulates the production of batches.

Yielding Values: The yield statement pauses the execution and returns a string describing the produced items for the current batch.

Iteration: When we create an instance of the generator (productionLine), we can use it in a for...of loop, which automatically calls the next() method and retrieves yielded values until the generator is don

*/