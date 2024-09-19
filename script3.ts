class Person4 {
    name: string;
    age: number;
  
    // Constructor to initialize the object
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display the person's information
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Creating a new instance of the Person class
  const person4 = new Person4("Alice", 25);
  person4.displayInfo(); // Output: Name: Alice, Age: 25

/*  Constructor Overloading (with Optional Parameters):
TypeScript allows constructors to handle optional parameters by using default values or ? for optional types.*/
class Employee1 {
    name: string;
    department: string;
  
    constructor(name: string, department: string = "General") {
      this.name = name;
      this.department = department;
    }
  
    displayEmployeeInfo() {
      console.log(`${this.name} works in ${this.department} department`);
    }
  }
  
  const employee1 = new Employee1("Bob");
  const employee2 = new Employee1("Eve", "IT");
  
  employee1.displayEmployeeInfo(); // Output: Bob works in General department
  employee2.displayEmployeeInfo(); // Output: Eve works in IT department
  