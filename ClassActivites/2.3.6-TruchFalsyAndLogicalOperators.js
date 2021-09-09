// NOTE: ZERO IS USE TO REPRESENT FALSE, ONE IS REPRESENTS TRUE.

// Logical Operators
// ? what do you expect each line to print?
console.log(true && false); // false - because both expression are not true.
console.log(true || false); // true - because one expression is true.
console.log(!true); // false - expression returns false for true statements.
console.log(!false); // true - expression returns true for false statements.
console.log(!(true && false)); // true - inside brackets = false. Expression returns true statements for false statements.
console.log(false || !false); // true - !false = true. Expression is true is either expression is true.

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log("" && 0); // falsy - because they are both expressions that can be converted to false.
console.log(undefined || null);  //falsy - because they are both expressions that can be converted to false.
console.log(!``); // truthy - because expression is convered to false
console.log(!(1 && "false")); // falsy - both expressions are false
console.log(NaN || !"true"); // falsy - because value can be converted to false.
console.log(!(0 && "true")); // truthy - both expressions are falose

// ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10
let age = 15;
if (age > 10) {
    console.log("full menu");
} else {
    console.log("kids menu");
};

// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.

let num;
console.log("The number is zero")