// create a variable referencing a primitive value
let y = 3;

// "pass" the value to x
// x and y === 3, but each is referencing a different copy of the value
let x = y;

// function to 
const addOne = y => {
    y += 1;
console.log("inside of function", y);
}

// mutate y
addOne(y);
// now, y === 4

// x is still === 3
console.log("outside of function:", x);