// ? TO DO: create a while loop that TOTALS the numbers from 1 to 100
// create a variable to represent the current number

let curNumber = 1;

// create a variable to represent the current total

let curTotal= 0;

// write a while loop that sums the numbers from 1 to 100

while (curNumber <= 100) {
    curTotal += curNumber; // The addition operator (-=) adds the value of the right operant to a variable and assigns the result to the variable (sytax: x += y // x = x + y).
    console.log(curNumber, curTotal);
    curNumber++;
};
console.log("Grand Total", curTotal);