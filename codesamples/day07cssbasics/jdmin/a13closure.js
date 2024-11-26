// Outer function: Factory that tracks inventory for a product
function createInventoryTracker() {
    let inventory = 0;  // `inventory` is a local variable closed over by the inner functions
  
    //closure functions becuse they have access to the outer function variable, after function
    //finishes execution..
    
    // Inner function: Adds products to the inventory
    function addProduct(quantity) {
      inventory += quantity; // Increments the inventory count by the given quantity
      console.log(`${quantity} product(s) added. Current inventory: ${inventory}`);
    }
  
    // Inner function: Removes products from the inventory
    function removeProduct(quantity) {
      if (inventory >= quantity) {
        inventory -= quantity; // Decrements the inventory count by the given quantity
        console.log(`${quantity} product(s) removed. Current inventory: ${inventory}`);
      } else {
        console.log("Not enough products in stock to remove.");
      }
    }
  
    // Return an object exposing the functions to manage inventory
    return {
      add: addProduct,
      remove: removeProduct,
      getInventory: function() {
        return inventory;
      }
    };
  }

  
  
  // Create an inventory tracker for a specific product (e.g., "Widget A")
  const widgetInventory = createInventoryTracker();
  
  // Using the inventory tracker to add and remove products
  widgetInventory.add(50);         // 50 products added
  widgetInventory.add(30);         // 30 products added
  console.log("Current inventory:", widgetInventory.getInventory());  // 80 products
  
  widgetInventory.remove(20);      // 20 products removed
  widgetInventory.remove(100);     // Trying to remove more than in stock
  console.log("Final inventory:", widgetInventory.getInventory());  // 60 products
  