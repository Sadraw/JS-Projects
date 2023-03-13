// We have 3 different key words here: 

// var

// let

// const

// keyword                  variable name       = "Assigned Value"; 
// const                    greeting            = "Hello";
// declaring a variable     

// String : a set of characters that reside between single or double quotes

var keywordOne = "Function scoped - Can be changed in scope -Available before declaration!";

let keywordTwo = "Block scoped - Can be changed in scope - Only available after declaration";

const keywordThree = "Block scoped - Cannot be changed - Only available after declaration ";

// UBUNTU 2 2
// now working on ubuntu for a change.

console.log(keywordOne);
console.log(keywordTwo);
console.log(keywordThree);
console.log(declarevar);
// var is been around the longest 


var declarevar = "Hey it actually works!"; // it actually gives undefined


// what to use when? 

//const by default 
//let in loops 

const type = "there are 3 types here";
console.log(type);
console.log("It's better to use const by default");
console.log("And let for loops");

// cheking Type     
// typeof
// instanceof
const one = 1;
one instanceof Number
console.log(one instanceof Number);
console.log(typeof one )

let x = 'something';
x = 1;
x = 1 + 'hello'; // is x a string or number? 
console.log(typeof x);
console.log(x);

y = "hey";
z = 1;
y == z;
console.log(y , z);
console.log(typeof y, typeof z);
// equality gotchas
console.log(1 == "1");
console.log(1 === "1");

console.log(0 == false);
console.log(0 === false);


// variables store values that can be used and chnaged throughtout your code. 
// creating deaclaring a variable has the following syntax [keyword] [name]. It's made up of the two parts. 

//let myVariable;
// myVariable = 123;
let myVariable = 123;
myVariable = 1234;
console.log(myVariable);
myVariable = 4321;
console.log(myVariable);


// constants 
// typically declared with all uppercase letters
console.log("Constants");
const MY_VARIALBE = 123;
console.log(MY_VARIALBE);
// cant change const after it is initialized. 

const PI = 3;
const OBJ = { a: 3};
console.log(OBJ);
OBJ.a = 5;
console.log(OBJ);

// Arithmetic Operators
console.log( 1 % 2);
console.log(15 * 15 * 20 * 32 / 14 & 5);


let myString1 = "Hello";
let myString2 = "World";
let concatenatedString = myString1 + myString2;
console.log(concatenatedString);