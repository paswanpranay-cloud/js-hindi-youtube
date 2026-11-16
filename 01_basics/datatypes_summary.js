// # Primitive

// 7 categeoroies :  
// String, Number, Boolean, null, undefined, Symbol(Unique) , BigInt

// These are call by value -> whwnever copied refernece of originial memeory 
//  is not given a copy  is made and given to you and the changes you made are implemented on copy

/*
***Imp
Javascript is dynamically typed language
-> we don't need to tell what type of value we use
*/

// Non primitive (Reference)

// the refernece of memeory can be allocated to you 

// Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// in symbol -> even if the value passed is same the result will be different 

console.log(id === anotherId);

const bigNumber = 1234567890987655n;

const heros = ["shaktiman","naagraj","doga"] // array and object in curly braces and
let myObj = {
    name : "Pranay",
    age : 22,
}   //  key value pair

// now trying declaring *function by variable
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); //bigInt
console.log(typeof outsideTemp); // object 
console.log(typeof scoreValue); // number
console.log(typeof myFunction); // function datatype aayega output(object function)
console.log(typeof heros); //object dega kyuki array ke ander to object hoga
console.log(typeof anotherId); // symbol
