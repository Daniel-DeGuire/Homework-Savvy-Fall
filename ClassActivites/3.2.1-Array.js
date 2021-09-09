// create an Array using an Array literal
let x = 5;
let y = "hello";

const something = [x, y, 4, "green", true, false, null, [9, 0, 9, 8, 5], ["this", "that"], 900, [], [true], {"name": "Fred"}];

// access the 1st item in the Array
 console.log(something[0]);

// access the last item in the Array
  console.log(something[12]);

// print the length of the Array
 console.log(something.length);

// use the length property to access the last item in the Array
console.log(something[something.length - 1] );

// with for...of, loop over the Array, modify the value and add to a different Array
let z, q = [];

 for (let element of something) {
   let newElement = element + 1;

    console.log(newElement);

    z += " " + newElement;
  
    q[element] = element;

 };
  console.log("This is z .... ", z);

 console.log("This is q====>>", q)