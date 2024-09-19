/* Type Assertions in TypeScript
Type assertions in TypeScript allow you to tell the compiler that you know more about the type of a value than it can infer. It's similar to type casting in other languages but does not actually change the runtime type of the data. Type assertions are used when you have more information about the type than TypeScript’s inference system.

There are two ways to perform type assertions in TypeScript:

Using the as syntax (preferred in modern TypeScript).
Using the angle-bracket (<>) syntax.*/
//Using the as syntax
var value = "This is a string";
var strLength = value.length; // Type assertion to 'string'
console.log(strLength); // Output: 16
//Using Angle Brackets (<>) Syntax
var value1 = "This is a string";
var strLength1 = value.length; // Type assertion to 'string'
console.log(strLength); // Output: 16
/* String Literal Types */
var direction;
direction = "up"; // Valid
direction = "left"; // Valid
var roll;
roll = 4; // Valid
roll = 6; // Valid
// roll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.
/*Boolean Literal Types*/
var Valid;
Valid = true; // Valid
Valid = false; // Valid
// isValid = "yes"; // Error: Type '"yes"' is not assignable to type 'true | false'.
