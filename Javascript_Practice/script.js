// Javascript Revision
// 2 june 2026


// dynamically typed language
// cannot start variable name with digit, can use $ and _ in variable names.

/*
what I learned:
variables and variable rules
let, const, var
datatypes in js
Arithmetic Operators
Unary Operators
Assignment Operators
Comparison Operators
Logical Operators
Ternary Operators
Conditional Statements (if)
if-else Statement

for loop
while loop 
for of loop
for in loop
Template literals

Arrays
functions

synchronous and asynchronous functions
callback function
callback hell
promise chaining
async await 

IIFE immediately invoked function expression

*/
// console.log("Hello World");






// Reverse a string
/*
let word = "Sahib";
let rev = "";

for (let i = word.length - 1; i>=0; i-- ){
    rev += word[i]; 
}

console.log(rev);
*/

/* use of for loop :

print 1 to 10
loop through an array
make a multiplication table
*/

/* use of while loop :

repeat until password is correct
repeat until money is finished
repeat until user chooses to quit
repeat until number reaches a limit
*/

/*
let name = "Sahibenoor";

for (let i of name){
    console.log(i);

}
*/
/*
let student = {
    name: "Jesse K",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for (let key in student) {
    console.log("key=", key, " value=", student[key]);
}
*/
/*
// Template literals
let cost = 42000;
let output = `the cost of this car is $${cost}`;

console.log(output);

*/
/*
let str = "Sahib\tnoor";
console.log(str.length + str);

console.log("Item\tPrice\nCar\t42000");

*/
/*
.length	Counts characters
.toUpperCase()	Converts to uppercase
.toLowerCase()	Converts to lowercase
.trim()	Removes outside spaces
.includes()	Checks if text exists
.startsWith()	Checks beginning
.endsWith()	Checks ending
.indexOf()	Finds position
.slice()	Cuts part of string
.replace()	Replaces first match
.replaceAll()	Replaces all matches
.split()	Converts string to array
.repeat()	Repeats string
*/
/*
let text = "  Hello JavaScript World  ";

console.log("length:", text.length);
// 26

console.log("toUpperCase:", text.toUpperCase());
// "  HELLO JAVASCRIPT WORLD  "

console.log("toLowerCase:", text.toLowerCase());
// "  hello javascript world  "

console.log("trim:", text.trim());
// "Hello JavaScript World"

console.log("includes:", text.includes("JavaScript"));
// true

console.log("startsWith:", text.trim().startsWith("Hello"));
// true

console.log("endsWith:", text.trim().endsWith("World"));
// true

console.log("indexOf:", text.indexOf("JavaScript"));
// 8

console.log("slice:", text.trim().slice(0, 5));
// "Hello"

let sentence = "I like cats and cats are cute";

console.log("replace:", sentence.replace("cats", "dogs"));
// "I like dogs and cats are cute"

console.log("replaceAll:", sentence.replaceAll("cats", "dogs"));
// "I like dogs and dogs are cute"

let fruits = "apple,banana,orange";

console.log("split:", fruits.split(","));
// ["apple", "banana", "orange"]

let word = "Hi ";

console.log("repeat:", word.repeat(3));
// "Hi Hi Hi "

*/

/*
let name = prompt("enter your name");
str = "@" + name + name.length;
console.log(str);
*/

//Arrays

// let items = [
//     "pen", "pencil", "book"
// ];

// items.length for the number of elements
// items[1] gives pen
// last index is array.length - 1;

// items.push("eraser");

/*
for (let i = 0; i <= items.length; i++) { // if we use <= rather than < ; it gives undefined at the end.
  console.log(items[i]);
}
*/
/*
for (let item of items) {
  console.log(item);
}
*/


/*
push()	Add to end
pop()	Remove from end
unshift()	Add to start
shift()	Remove from start
*/

// .includes()
// .indexOf()

// .slice(1,4)    start is included but end is not

// .splice(1,2)  Start at index 1, remove 2 items

// items.splice(1, 0, "scale", "compass");  Start at index 1, remove 0 items, add "scale" and "compass".

// items.join(", ")

// items.split(" ")

// .reverse()

// .sort() aphabetical


/*
let numbers = [100, 5, 20, 1];

numbers.sort((a, b) => a - b); Ascending order

console.log(numbers);
*/

/*
Task	Best Method
Add item to end	push()
Remove item from end	pop()
Add item to start	unshift()
Remove item from start	shift()
Check if value exists	includes()
Find index	indexOf()
Copy part	slice()
Remove/add inside original array	splice()
Convert array to string	join()
Change every item into new array	map()
Keep selected items	filter()
Find first matching item	find()
Check if one item matches	some()
Check if all items match	every()
Make one final value	reduce()
*/


// functions

// function greet(name) {
//     return `hello ${name}`;
// }


// str = greet("Sahib");
// console.log(str);

// Variable inside function = local
// Variable outside function = global

/* callback
function sum(a,b){
    console.log(a+b);
}

function calculator(a, b, callBack){
    callBack(a,b);
}

calculator(1,2,sum); => cannot be calculator(1,2,sum());

*/


// function getData(dataId, getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         getNextData();
//     }, 2000);
// }

// // callback hell
// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//     getData(3, () => {
//         console.log("getting data 4");
//     getData(4)
// });
// }); 
// });
// -------------------------- can also be done like this

// function getData(dataId){
//     //2s
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//     }, 2000);
// });
// }

// //Promise Chain

// console.log("getting data1 ....");
// getData(1)
//     .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2);
// })
//     .then((res) => {
//     console.log("getting data3 ....");
//     return getData(3);
// })
//     .then((res) => {
//     console.log(res);
// });

// like>> 
// console.log("getting data1 ....");
// getData(1)
//     .then()
//     .then()
//     .then();




// the solution is promises

// promise has 3 states: pending, fulfilled, rejected;

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("im a promise");
//         resolve("success");
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise filfilled", res);
// })

// promise.catch((err) =>{
//     console.log("rejected", err);
// })

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data1");
//         resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("fetching data 1 ...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data 2 ...");
//     let p2 = asyncFunct2();
//     p2.then((res) => {}
//     )
// })

// above can also be written as


// console.log("fetching data 1 ..."); 
// asyncFunc1().then((res) => {
//     console.log("fetching data 2 ...");
//     asyncFunc2().then((res) => {})
// })



// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
// } 


// (async function () {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
// })();

