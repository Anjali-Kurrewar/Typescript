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
  
  // Access modifiers
  /*TypeScript has four access modifiers: public, private, protected, and readonly.
  By default, properties and methods are public.
  Public properties and methods can be accessed from outside the class.
  Private properties and methods can only be accessed within the class.
  Protected properties and methods can be accessed within the class and its subclasses.
  Readonly properties cannot be reassigned after they are initialized. */

  /*Public */
  class Animal {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  const dog = new Animal("Dog");
  console.log(dog.name); // Accessible: Output -> Dog
  dog.makeSound();       // Accessible: Output -> Dog makes a sound.

  /*Private */
  class Person5 {
    private age: number;
  
    constructor(age: number) {
      this.age = age;
    }
  
    public showAge() {
      console.log(`Age is: ${this.age}`);
    }
  }
  
  const person5 = new Person5(30);
  person5.showAge(); // Accessible through a public method: Output -> Age is: 30
  // console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.

  /*Protected */
  class Employee6 {
    protected employeeId: number;
  
    constructor(employeeId: number) {
      this.employeeId = employeeId;
    }
  }
  
  class Manager extends Employee6 {
    constructor(employeeId: number) {
      super(employeeId);
    }
  
    public showEmployeeId() {
      console.log(`Employee ID: ${this.employeeId}`);
    }
  }
  
  const manager = new Manager(101);
  manager.showEmployeeId(); // Output -> Employee ID: 101
  // console.log(manager.employeeId); // Error: Property 'employeeId' is protected and only accessible within class 'Employee' and its subclasses.
  
  /*Readonly Properties*/
  class Car {
    readonly brand: string;
  
    constructor(brand: string) {
      this.brand = brand; // Can be assigned in the constructor
    }
  
    showBrand() {
      console.log(`Car brand: ${this.brand}`);
    }
  }
  
  const car = new Car("Toyota");
  console.log(car.brand); // Output: Toyota
  // car.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property.

  /*Setter and Getter */
  class Employee7 {
    private _fullName: string = "";
  
    // Getter: Retrieve the property value
    get fullName(): string {
      return this._fullName;
    }
  
    // Setter: Validate and set the property value
    set fullName(newName: string) {
      if (newName.length > 0) {
        this._fullName = newName;
      } else {
        console.log("Error: Name cannot be empty.");
      }
    }
  }
  
  const emp = new Employee7();
  emp.fullName = "John Doe"; // Calls the setter
  console.log(emp.fullName); // Calls the getter -> Output: John Doe
  
  emp.fullName = ""; // Output: Error: Name cannot be empty.
  
  /*Fuction Types*/
  function add(a: number, b: number): number {
    return a + b;
  }
  
  const result = add(5, 10);
  console.log(result); // Output: 15

  /*Optional Parameters*/
  function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
  }
  
  console.log(greet("Alice")); // Output: Hello, Alice
  console.log(greet("Bob", "Good morning")); // Output: Good morning, Bob
  
  /*Default Parameters*/
  function greetUser(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
  }
  
  console.log(greetUser("Alice")); // Output: Hello, Alice
  console.log(greetUser("Bob", "Hi")); // Output: Hi, Bob
  
  /*In TypeScript, modules are used to organize and reuse code. Modules allow you to export variables, functions, classes, interfaces, etc., from one file and import them into another. TypeScript uses ES6 module syntax, and it allows you to manage dependencies between files in a clear and structured way.

### 1. **Exporting in TypeScript**

There are two main ways to export code from a module in TypeScript:
- **Named Exports**: You can export multiple items (variables, functions, classes, etc.) from a module.
- **Default Exports**: You can export a single default value from a module.

#### **Named Exports**
With named exports, you explicitly export each item with the `export` keyword. The importing file must use the exact name of the exported item.

#### Example: Named Exports
```typescript
// file: mathUtils.ts
export const PI = 3.14;

export function add(a: number, b: number): number {
  return a + b;
}

export class Calculator {
  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

In this example, the constants `PI`, the function `add`, and the class `Calculator` are being exported using **named exports**.

##### Importing Named Exports:
You can import the named exports using their exact names, enclosed in curly braces.

```typescript
// file: main.ts
import { PI, add, Calculator } from './mathUtils';

console.log(PI); // Output: 3.14
console.log(add(2, 3)); // Output: 5

const calc = new Calculator();
console.log(calc.subtract(10, 5)); // Output: 5
```

- You must use the same names as the exported ones (`PI`, `add`, `Calculator`).
- If you want to rename a named export during import, you can use the `as` keyword:
  ```typescript
  import { PI as CirclePI } from './mathUtils';
  console.log(CirclePI); // Output: 3.14
  ```

#### **Default Exports**
A module can have only one **default export**. The `export default` syntax is used when exporting the primary item from a module.

#### Example: Default Exports
```typescript
// file: logger.ts
export default function log(message: string): void {
  console.log(`Log: ${message}`);
}
```

##### Importing Default Exports:
When importing a default export, you don’t need to use curly braces. You can also give it any name.

```typescript
// file: main.ts
import log from './logger';

log('This is a message'); // Output: Log: This is a message
```

### 2. **Re-exporting from a Module**
You can re-export items from another module using `export` and `import` together, which is useful for consolidating exports.

#### Example: Re-exporting
```typescript
// file: geometry.ts
export * from './mathUtils'; // Re-export everything from mathUtils
```

Now, everything from `mathUtils` will also be available for import from `geometry.ts`.

```typescript
// file: main.ts
import { PI, add, Calculator } from './geometry';

console.log(PI); // Output: 3.14
console.log(add(5, 6)); // Output: 11
```

### 3. **Exporting as a Namespace**
You can also use the `namespace` keyword to group related exports under a single name.

#### Example: Namespaces
```typescript
// file: shapes.ts
export namespace Shapes {
  export class Circle {
    constructor(public radius: number) {}
  }

  export class Square {
    constructor(public sideLength: number) {}
  }
}
```

##### Importing Namespaces:
You can import the entire namespace, and then access the exports within it.

```typescript
// file: main.ts
import { Shapes } from './shapes';

const circle = new Shapes.Circle(5);
console.log(circle.radius); // Output: 5

const square = new Shapes.Square(10);
console.log(square.sideLength); // Output: 10
```

### 4. **Importing Everything from a Module**
You can import everything from a module using `*` as an alias.

#### Example: Importing All Exports
```typescript
// file: main.ts
import * as Utils from './mathUtils';

console.log(Utils.PI); // Output: 3.14
console.log(Utils.add(3, 4)); // Output: 7
```

In this case, all exports from `mathUtils` are available as properties of the `Utils` object.

### 5. **Side-effect Imports**
Sometimes you may want to import a module only for its side effects, without importing anything specific. This is useful for modules that augment the environment or have global actions.

#### Example: Side-effect Import
```typescript
// file: init.ts
console.log('Initializing...');
```

```typescript
// file: main.ts
import './init'; // Output: Initializing...
```

This imports `init.ts` only for its side effects (like logging), without importing any values.

### 6. **Mixing Named and Default Exports**
You can mix named exports with default exports in a single module.

#### Example: Mixed Exports
```typescript
// file: mathOperations.ts
export const PI = 3.14;

export default function multiply(a: number, b: number): number {
  return a * b;
}
```

##### Importing Mixed Exports:
```typescript
// file: main.ts
import multiply, { PI } from './mathOperations';

console.log(PI); // Output: 3.14
console.log(multiply(2, 5)); // Output: 10
```

### Summary:
- **Named Exports**: Use `export` to export multiple items and import them with their exact names using curly braces.
- **Default Exports**: Use `export default` for a single primary export, which can be imported without curly braces.
- **Re-exporting**: Use `export * from` to re-export all items from another module.
- **Namespaces**: Use `namespace` to group related exports under a common name.
- **Importing Everything**: Use `* as alias` to import all exports as a single object.
- **Side-effect Imports**: Import a module for its side effects without importing specific values.

By managing code with modules in TypeScript, you can structure and organize your codebase more effectively and promote code reuse across files and projects.*/