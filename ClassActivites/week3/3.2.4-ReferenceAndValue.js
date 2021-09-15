// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4); // True
console.log("Hello, world" === "Hello, world"); // True

let x = false;
let y = x;  
console.log(x === y); // True
x = !x; // X is now True - Y is still False
console.log(x === y); // False

console.log([1, 2, "c"] === [1, 2, "c"]);
console.log({} === {}); // Falsy - because each array returns no value (undefined).

y = { id: 1 };
const x = y;
console.log(x === y); // True
y.id += 1;
console.log(x.id === y.id); // False
