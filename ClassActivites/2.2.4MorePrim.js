// create five variables and assign them values
// each variable should reference a different primitive data type

let string = "Tubo Disco";
let number = 26;
let boolean = false;
let watch = null;
let noVariables;

// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(typeof string, typeof number, typeof watch, typeof noVariables);

// create a variable that references a template literal
// inside the template literal, use two variables

let template = `My favorite dance is ${string} and I will do it ${number} times`;

console.log(template)

// reassign the value of the variable that references "null"

watch = "keeps my time";

// print the value and its type

console.log(typeof watch);

// print a variable that causes a ReferenceError

console.log(noWhere);

// alter the previous line to no longer cause a ReferenceError

let noWhere;
console.log(noWhere);