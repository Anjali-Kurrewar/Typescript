/* Type Assertions in TypeScript
Type assertions in TypeScript allow you to tell the compiler that you know more about the type of a value than it can infer. It's similar to type casting in other languages but does not actually change the runtime type of the data. Type assertions are used when you have more information about the type than TypeScript’s inference system.

There are two ways to perform type assertions in TypeScript:

Using the as syntax (preferred in modern TypeScript).
Using the angle-bracket (<>) syntax.*/

//Using the as syntax
let value: unknown = "This is a string";
let strLength: number = (value as string).length; // Type assertion to 'string'
console.log(strLength); // Output: 16
//Using Angle Brackets (<>) Syntax
let value1: unknown = "This is a string";
let strLength1: number = (<string>value).length; // Type assertion to 'string'
console.log(strLength); // Output: 16

/* String Literal Types */
let direction: "up" | "down" | "left" | "right";

direction = "up";   // Valid
direction = "left"; // Valid
// direction = "forward"; // Error: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'.

/* Numeric Literal Types */
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll;

roll = 4; // Valid
roll = 6; // Valid
// roll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.

/*Boolean Literal Types*/
let Valid: true | false;

Valid = true;  // Valid
Valid = false; // Valid
// isValid = "yes"; // Error: Type '"yes"' is not assignable to type 'true | false'.


// 1. **Named Function**
//A named function has a specific name that can be used to call it.

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3)); // Output: 5


// 2. **Anonymous Function**
//An anonymous function doesn’t have a name. It’s usually assigned to a variable.

const multiply = function (a: number, b: number): number {
    return a * b;
};
console.log(multiply(2, 3)); // Output: 6


// 3. **Arrow Function**
// Arrow functions provide a concise way to write functions. They use the `=>` syntax.

const subtract = (a: number, b: number): number => {
    return a - b;
};
console.log(subtract(5, 2)); // Output: 3


//4. **Explicit Return Type**
//You explicitly specify the type of value that the function will return.

function divide(a: number, b: number): number {
    return a / b;
}


//5. **Implicit Return Type**
// TypeScript can infer the return type based on the function’s logic. This means you don’t need to specify the return type explicitly.

function square(a: number) {
    return a * a; // TypeScript infers this will return a number
}


/* 6. **Optional Parameters**
Optional parameters allow you to define parameters that may or may not be passed when the function is called. These parameters are marked with a `?`.*/

function calculateArea(length: number, width?: number): number {
    if (width) {
        return length * width; // Rectangle area
    } else {
        return length * length; // Square area (when only one argument is provided)
    }
}

console.log(calculateArea(5));       // Output: 25 (Assumes a square, i.e., 5 * 5)
console.log(calculateArea(5, 10));   // Output: 50 (Rectangle, i.e., 5 * 10)


/*7. **Default Parameters**
Default parameters provide a default value for a parameter if no argument is passed.*/

function power(base: number, exponent: number = 2): number {
    return base ** exponent;
}
console.log(power(3)); // Output: 9 (exponent defaults to 2)
console.log(power(3, 3)); // Output: 27


/* 8. **Rest Parameters**
Rest parameters allow you to pass an indefinite number of arguments as an array.*/

function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


/*These are key features of functions in TypeScript, allowing for flexibility and type safety when building complex applications.*/