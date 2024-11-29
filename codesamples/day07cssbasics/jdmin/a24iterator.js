/*

we created a custom iterator for a ProductionBatch class,
 allowing us to iterate over the items produced in each batch.
  We also used a generator function in the ProductionLine class to yield batches, demonstrating how to combine custom iterators with generator functions. This pattern can be particularly useful in a manufacturing context, allowing you to manage and traverse collections of production data in a clean

*/

// Create an array
const numbers = [1, 2, 3, 4, 5];

// Create an iterator for the array
const iterator = numbers[Symbol.iterator]();

/*

Creating an Iterator: The Symbol.iterator is a built-in method that returns an
 iterator for the array. Every array, string, or other iterable object 
 has a built-in iterator.

 Iterator End: Once all elements have been iterated over,
  the done property will be true, and the value will be undefined.


*/

// Use the iterator to go through the array
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


const customIterable = {
    data: [10, 20, 30, 40, 50],
  
    [Symbol.iterator]() {
      let index = 0;
      const data = this.data;
  
      return {
        next() {
          if (index < data.length) {
            return { value: data[index++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  // Using the custom iterator
  const iterator1 = customIterable[Symbol.iterator]();
  console.log(iterator1.next()); // { value: 10, done: false }
  console.log(iterator1.next()); // { value: 20, done: false }
  console.log(iterator1.next()); // { value: 30, done: false }
  console.log(iterator1.next()); // { value: 40, done: false }
  console.log(iterator1.next()); // { value: 50, done: false }
  console.log(iterator1.next()); // { value: undefined, done: true }




class ProductionBatch {
    constructor(batchId, items) {
        this.batchId = batchId;
        this.items = items; // Array of items produced
        this.index = 0; // Initialize index for iteration
    }

    // Iterator method
    [Symbol.iterator]() {
        return {
            batch: this,
            next() {
                if (this.batch.index < this.batch.items.length) {
                    return {
                        value: this.batch.items[this.batch.index++],
                        done: false
                    };
                } else {
                    return { done: true }; // Indicate iteration is complete
                }
            }
        };
    }
}

class ProductionLine {
    constructor(name) {
        this.name = name;
        this.batches = [];
    }

    addBatch(batch) {
        this.batches.push(batch);
    }

    // Method to iterate over all batches
    *getBatches() {
        for (const batch of this.batches) {
            yield batch; // Yield each batch one by one
        }
    }
}


// Create a production line
const lineA = new ProductionLine("Line A");

// Create production batches
const batch1 = new ProductionBatch(1, ["Item A1", "Item A2", "Item A3"]);
const batch2 = new ProductionBatch(2, ["Item B1", "Item B2"]);

// Add batches to the production line
lineA.addBatch(batch1);
lineA.addBatch(batch2);

// Iterate over each batch in the production line
for (const batch of lineA.getBatches()) {
    console.log(`Batch ID: ${batch.batchId}`);
    for (const item of batch) {
        console.log(`  Produced: ${item}`);
    }
}

// Outputs:
// Batch ID: 1
//   Produced: Item A1
//   Produced: Item A2
//   Produced: Item A3
// Batch ID: 2
//   Produced: Item B1
//   Produced: Item B2


/*

Symbol: Symbol.iterator is a well-known symbol that is used to access the default iterator for an object. It's part of the ECMAScript 2015 (ES6) specification.

Iterator Method: By defining a method with the key [Symbol.iterator], you specify how to traverse the object's elements. This method should return an iterator object.

Iterator Object: An iterator object must implement a next() method, 
which returns an object with two properties:
value: The current value in the iteration.
done: A boolean indicating whether the iteration is complete

Method Definition: The [Symbol.iterator] method is defined within the ProductionBatch class. This method returns an iterator object.

Iterator Object: The iterator object created inside the [Symbol.iterator] method has a next() method that:

Checks if there are more items to iterate over.
If there are, it returns the next item and sets done to false.
If all items have been iterated, it returns an object with done set to true.


By defining the [Symbol.iterator] method, instances of the
 ProductionBatch class can be used in a for...of loop or
  with other constructs that rely on iteration:

*/


