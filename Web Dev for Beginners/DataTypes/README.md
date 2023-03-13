## Data types 
## what to use when? 

Declaring variables 

It's better to use **const by default 
and **let for loops

JavaScript is weakly typed language. 
Simple type system. 
**Number (float), **String, **Boolean, **Date, **Function, **Array, and **Object

## Special Types 
**NaN, **null, **undefined

## Cheking Type 

**typeof operator: returns a string of the data type primitive 

**instanceof operator: Returns a Boolean of if a value matches the data type. 

## JavaScript has some "gotchas" when it comes to equality and type coercion. Here are some examples:

## NaN is not equal to anything, including itself:
```
NaN == NaN    // false
NaN === NaN   // false
```
## Undefined and null are equal to each other, but not to any other value:
```
undefined == null    // true
undefined === null   // false

undefined == false   // false
null == false        // false
```
## Comparing values of different types can lead to unexpected results due to type coercion:
1 == "1"   // true (because the string "1" is coerced to the number 1)
"1" == true // true (because true is coerced to the number 1)
"" == false // true (because false is coerced to the number 0, and an empty string is also coerced to 0)
### Objects are compared by reference, not by value:
```
var obj1 = { a: 1 };
var obj2 = { a: 1 };

obj1 == obj2   // false
obj1 === obj2  // false
```
To avoid these "gotchas", it's generally a good practice to use the strict equality operator === whenever possible, and to be aware of the types of values being compared. It's also a good idea to use explicit type conversion (such as Number() or String()) when necessary to ensure that values are being compared in the expected way.

## Variables 
Variables store values that can be used and changed throughtout your code. 
Creataing and declaring a avriable has athe following syntax [keyword] [name]. It's made up of the two parts: 
### Keyword. Keywords can be let or var
The keyword let was introduced in ES6 and gives your variable a so called block scope. It's recommended that you use let over var. 
### The variable name, this is a name you choose yourself. 


## Constants
declaration and initialization of a constant follows the same conepts as a variablr, with the exception of the const keyword. Constants are typically declared with all uppercase letters.

```
const MY_VARIABLE = 123;
```
### const must have a value. 
Constants must be initialized, or an error will occcur when running code.
### refrence cannot be changed. 
The reference of a constant cannot be changed once initialized, or error will occur when running code. 

## Object value is not protected tho: 
```
const obj = { a: 3};
obj.a = 5; //allowed
```
Here we are changing the value of the object but not the reference itself, which makes it allowed. ++ 
### a const means the reference is prtected from reassignment. The value is not immutable though and can change, especially if it's a complex construct like an object. 


## Data Types
Variables can store many different types of values. 
### Data Types are also referred to as JavaScript data primitives, as they are the lowest-level data types that are proided by the language. There are 7 primitive data types: 
## string - number - bigint = boolean - undefined - null - symbol



### Numbers
let myVariable = 123;
Variables can store all types of numbers, including decimals or negative numbers. Numbers also can be used with arithmetic operators.

## Arithmetic Operators
There are several types of operators to use when performing arithmetic functions, and some are listed here:

## Symbol	Description	     Example
```
+	Addition: Calculates the sum of two numbers	1 + 2 //expected answer is 3
-	Subtraction: Calculates the difference of two numbers	1 - 2 //expected answer is -1
*	Multiplication: Calculates the product of two numbers	1 * 2 //expected answer is 2
/	Division: Calculates the quotient of two numbers	1 / 2 //expected answer is 0.5
%	Remainder: Calculates the remainder from the division of two numbers	1 % 2 //expected answer is 1
```


## Strings 
Strings are sets of characters that reside between single or double quotes.
``` 
'This is a string.'
"This is also a string."
ket myString = 'this is a string value stored in a variable';
```

### Formatting Strings 
Strings are textual, and will require formatting from time to time. 

To concatenate two or more strings, we can join them using ```+``` operator.
```
let mySting1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!" //HelloWorld!
```


## Template literals 

are another way to format strings, except instead of quotes, the backtick is used, Anything that is not plain text must be places inside placeholders ${}. This includes any variables that may be strings. 
```
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!

```

```
let myString1 = "Hello";
let myString2 = "World";
let concatenatedString = myString1 + myString2;
console.log(concatenatedString);
```



## Booleans

Booleans an be only two values: true or false
Booleans can help make decisions on which lines of code should run when certain conditions are met. In kany cases, operators assist with setting the cvalue of a Boolean and you will often notice and write variables being initialized or their values being updated with an operator. 

``` 
let myTrueBool = true
let myFalseBool = false
```
A variable can be considered 'truthy' if it evaluates to a boolean true. 
#### Interestingly, in JS, all values are truthy unless defined as falsy!



## Learning about JS gotchas 