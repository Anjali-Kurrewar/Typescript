//Type Inference
/*Type inference is a feature where TypeScript automatically determines the type of a variable or expression
based on the assigned value.*/
var name2 = "Alice"; // TypeScript infers the type as 'string'
var age2 = 25; // TypeScript infers the type as 'number'
//Union types
/*Union types allow you to combine multiple types into a single type.
TypeScript will check the type at compile-time and ensure that only the expected values are assigned.*/
var mixedType = "Hello"; // TypeScript infers the type as'string | number'
mixedType = 10;
mixedType = 34;
var staff = {
    name: "Mahesh",
    age: 30,
    employeeId: 123,
    department: "IT"
};
