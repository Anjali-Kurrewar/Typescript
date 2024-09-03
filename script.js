//Basics Types
// Number, String, Boolean (haves a push loop hole )
// Arrays,Tuples
// Any, Unknown, Never, Void
// Enums
//Number
var age = 20;
var rollno = 78;
//String
var a = "John Doe";
var address = "123 Main St";
//Boolean
var isValid = false;
var isValidString = true;
//Arrays
var numbers = [1, 2, 3, 4, 5];
var fruits = ["Apple", "Banana", "Orange"];
//Tuples
var person = ["John Doe", 20, false];
//Any
//Represents any type. It allows you to assign any value to a variable.
var myVariable = 10;
myVariable = "Hello World";
//Unknown
//Similar to Any, but it also allows you to assign any value to a variable.
//However, it doesn't have the push loop hole that Any has.
var myVariable2 = 10;
myVariable2 = "Hello World";
//Never
//Represents the type of values that never occur.
function error(message) {
    throw new Error(message);
}
//Void
//Represents the type of values that never have a value.
function log() {
    console.log("This function doesn't return anything");
}
//Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up; // This will set 'move' to 1 (Direction.Up).
//Push Loophole Explanation
/*In TypeScript, arrays or tuples can lead to a "push loophole" when you specify multiple types for an array or tuple.
If you declare an array or tuple with a union of types, TypeScript allows you to push any of the specified types into the array.*/
//Example with an array:
var mixedArray = [1, "hello"];
mixedArray.push(42); // Valid
mixedArray.push("world"); // Valid
//Example with a tuple:
var mixedTuple = [1, "hello"];
mixedTuple.push(42); // Valid but unexpected for tuples
mixedTuple.push("world"); // Valid but unexpected for tuples
//Why is it a loophole?
/* For arrays, it’s intentional that you can push either type. However, for tuples, which are meant to have a fixed structure,
allowing push to add elements breaks the intended fixed-length constraint.This loophole occurs because tuples are essentially
arrays under the hood in JavaScript. TypeScript allows the push method, which isn't type-checked for fixed-length in tuples,
to add elements beyond the specified length. */
//Type Inference
