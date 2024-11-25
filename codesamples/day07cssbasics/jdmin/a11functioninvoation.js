// 1. Method Invocation
const person = {
    name: "ABC",
    greet: function() {
      console.log("Method Invocation: Hello, " + this.name); // `this` refers to the `person` object
    }
  };
  
  person.greet();  // "Method Invocation: Hello, ABC"
  
  // 2. Function Invocation
  function greet() {
    console.log("Function Invocation: Hello, " + this.name); // `this` refers to the global object in non-strict mode
  }
  
  var name = "Global";
  greet();  // "Function Invocation: Hello, Global" (in non-strict mode, `this` is the global object)
  
  // 3. Constructor Invocation
  function Person(name) {
    this.name = name;
  }
  
  const abc = new Person("abc");
  console.log("Constructor Invocation: " + abc.name);  // "Constructor Invocation: abc"
  
  // 4. Explicit Binding (call())
  function sayHello() {
    console.log("Explicit Binding (call): Hello, " + this.name);
  }
  
  const def = { name: "def" };
  sayHello.call(def);  // "Explicit Binding (call): Hello, def"
  
  // 5. Explicit Binding (apply())
  function greetWithTime(greeting) {
    console.log(greeting + ", " + this.name);
  }
  
  const charlie = { name: "Charlie" };
  greetWithTime.apply(charlie, ["Good morning"]);  // "Good morning, Charlie"
  
  // 6. Arrow Function Invocation
  const personWithArrow = {
    name: "Dave",
    greet: function() {
      setTimeout(() => {
        console.log("Arrow Function Invocation: Hello, " + this.name);  // `this` refers to the `personWithArrow` object
      }, 1000);
    }
  };
  
  personWithArrow.greet();  // "Arrow Function Invocation: Hello, Dave" (lexical `this`)
  
  // 7. Event Handler Invocation
  // Create a simple button for testing event handler (for browser environment)
  document.body.innerHTML = '<button id="myButton">Click Me</button>';
  const button = document.getElementById('myButton');
  
  button.addEventListener('click', function() {
    console.log("Event Handler Invocation: Button clicked, `this` refers to", this);  // `this` refers to the button
  });
  
  