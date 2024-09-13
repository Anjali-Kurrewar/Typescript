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

//Type Aliases
/* Two types of Aliases
Primitive type aliases
Object type aliases */

//Primitive type aliases
type Name = string;
let z: Name ;

//Object type aliases
type Human = {
    name : string;
    id : number;
}

let p: Human = {
    name : "Anjali",
    id : 43
};

//Union type aliases 
type Enrollment = string | number;
let enroll: Enrollment = 12;

//Intersection type aliases(Use & operator)
type StudentAge = {age: 10};
type StudentName = {name: string};
type StudentAddress = {address: string};

type Student = StudentAge & StudentName & StudentAddress;

const Megha : Student = {
    age: 10,
    name: "Megha",
    address: "123 Main Street"
}

//Difference between types and aliases

/*Basic syntax*/
//Interfaces
interface Person2 {
    name: string;
    age: number;
  }
// Aliases
type Person3 = {
    name : string;
    age: number;
}

/*Extending*/

//Interface
interface Person1 {
    employeeName: string;
}

interface Person2 extends Person1 {
    employeeId: number;
}

//Aliases
type Model1  = {
    name : string;
    id: 2;
}

type ModelName = Model1 & {
    name: "Shrimati",
    id: 8;
}

/*Merging */
interface Merge1 {
    name: string;
}
interface Merge1 {
    id: number;
}
const MergedContent : Merge1 = {
    name: "Malini",
    id: 1
}

/*Types cannot be merged. If you declare the same type name multiple times, you'll get a compilation error. */
