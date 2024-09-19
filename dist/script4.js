"use strict";
/* Type Assertions in TypeScript
Type assertions in TypeScript allow you to tell the compiler that you know more about the type of a value than it can infer. It's similar to type casting in other languages but does not actually change the runtime type of the data. Type assertions are used when you have more information about the type than TypeScript’s inference system.

There are two ways to perform type assertions in TypeScript:

Using the as syntax (preferred in modern TypeScript).
Using the angle-bracket (<>) syntax.*/
//Using the as syntax
let value = "This is a string";
let strLength = value.length; // Type assertion to 'string'
console.log(strLength); // Output: 16
//Using Angle Brackets (<>) Syntax
let value1 = "This is a string";
let strLength1 = value.length; // Type assertion to 'string'
console.log(strLength); // Output: 16
/* String Literal Types */
let direction;
direction = "up"; // Valid
direction = "left"; // Valid
let roll;
roll = 4; // Valid
roll = 6; // Valid
// roll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.
/*Boolean Literal Types*/
let Valid;
Valid = true; // Valid
Valid = false; // Valid
// isValid = "yes"; // Error: Type '"yes"' is not assignable to type 'true | false'.
