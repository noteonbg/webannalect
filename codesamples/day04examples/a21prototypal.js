// Step 1: Define a Vehicle constructor function (the parent object)
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Step 2: Add methods to the Vehicle prototype
  Vehicle.prototype.getDetails = function() {
    return `${this.make} ${this.model}`;
  };
  
  // Step 3: Define a Car constructor function (the child object)
  function Car(make, model, numDoors) {
    // Call the Vehicle constructor with `this` (inherit properties from Vehicle)
    Vehicle.call(this, make, model);
    this.numDoors = numDoors;
  }
  
  // Step 4: Set up inheritance by linking Car's prototype to Vehicle's prototype
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Step 5: Add a method to the Car prototype
  Car.prototype.getCarDetails = function() {
    return `${this.getDetails()} with ${this.numDoors} doors`;
  };
  
  // Step 6: Create an instance of Car
  const myCar = new Car('Toyota', 'Corolla', 4);
  
  // Step 7: Call methods to see prototypal inheritance in action
  console.log(myCar.getDetails());        // Inherited from Vehicle prototype
  console.log(myCar.getCarDetails());     // From Car prototype
  
  console.log(myCar instanceof Car);      // true
  console.log(myCar instanceof Vehicle);  // true
  