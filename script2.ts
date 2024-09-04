//Type Inference
/*Type inference is a feature where TypeScript automatically determines the type of a variable or expression 
based on the assigned value.*/
let name2 = "Alice"; // TypeScript infers the type as 'string'
let age2 = 25;       // TypeScript infers the type as 'number'

//Union types
 /*Union types allow you to combine multiple types into a single type. 
 TypeScript will check the type at compile-time and ensure that only the expected values are assigned.*/
let mixedType: string | number = "Hello"; // TypeScript infers the type as'string | number'
mixedType = 10;
mixedType =  34;

//Intersection Types
/*Intersection types combine multiple types into one. A variable of an intersection type must satisfy 
all the combined types.*/
type Person = {
    name: string;
    age: number;
};
type Employee={
    employeeId: number;
    department: string;
};

type StaffMember = Person & Employee;

const staff: StaffMember = {
    name: "Mahesh",
    age: 30,
    employeeId: 123,
    department: "IT"
}