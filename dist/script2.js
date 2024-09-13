"use strict";
//Type Inference
/*Type inference is a feature where TypeScript automatically determines the type of a variable or expression
based on the assigned value.*/
let name2 = "Alice"; // TypeScript infers the type as 'string'
let age2 = 25; // TypeScript infers the type as 'number'
//Union types
/*Union types allow you to combine multiple types into a single type.
TypeScript will check the type at compile-time and ensure that only the expected values are assigned.*/
let mixedType = "Hello"; // TypeScript infers the type as'string | number'
mixedType = 10;
mixedType = 34;
const staff = {
    name: "Mahesh",
    age: 30,
    employeeId: 123,
    department: "IT"
};
let z;
let p = {
    name: "Anjali",
    id: 43
};
let enroll = 12;
const Megha = {
    age: 10,
    name: "Megha",
    address: "123 Main Street"
};
const MergedContent = {
    name: "Malini",
    id: 1
};
/*Types cannot be merged. If you declare the same type name multiple times, you'll get a compilation error. */
