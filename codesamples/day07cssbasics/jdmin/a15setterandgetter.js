class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter method
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter method
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  }
  
  const person = new Person("abc", "def");
  
  // Accessing the getter method (as a property)
  console.log(person.fullName);  // Output: John Doe
  
  // Using the setter method (assigning a value)
  person.fullName = "freak junk";
  
  // After changing fullName, the object now reflects the updated values
  console.log(person.firstName);  // Output: Jane
  console.log(person.lastName);   // Output: Smith
  console.log(person.fullName);   // Output: Jane Smith
  