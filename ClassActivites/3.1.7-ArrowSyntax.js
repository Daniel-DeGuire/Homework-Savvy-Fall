// refactor the functions below into arrow syntax
function myNumberFunction() {
    return ((2 ** 2 + 3) % 4) * 14;
};

const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

// refactor the functions below into arrow syntax

function greet(name) {
    return `Hello, ${name}`;
};

const greet = name =>  `Hello, ${name}`;

// refactor the functions below into arrow syntax

const timeOfDayGreet = function(name, timeOfDay) {
    return `Hello, ${name}, good ${timeOfDay}`;
};

const timeofDayGree = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

// refactor the functions below into arrow syntax

function tripleAndHalf(num) {
    let triple = num * 3;
    return triple / 2;
};

const  tripleAndHalf = num => {
    let triple = num * 3;
    return triple / 2;
};

// refactor the functions below into arrow syntax

function sumTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(`The sum of your numbers is ${sum}.`);
    return sum;
};

const sumTwoNumbers = (num1, num2) => {
    let sum = num1 + num2;
    console.log(`The sum of your numbers is ${sum}.`);
    return sum;
};
