// create a variable referencing a composite value
const x = { name: "Manav" };

// "pass" the value to y
const y = x;
// x and y now each reference the same JS Object

// mutate a property of the Object through variable x
x.name = "Martin";

// because x and y reference the same Object, y is effected by mutations to x
console.log(y.name); // 'Martin'