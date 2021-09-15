let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

console.log(x, y, z);
x = 0;
y = ''

z.id = NaN;
z.name = null;

// print x, y, and z

console.log(x, y, z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values

a = "name";
b = Nan;
c = 0;
console.log(a, b, c)

// using BRACKET NOTATION, assign a value to b

b[0] = 5;
console.log(b);

// using DOT NOTATION, assign a PROPERTY to c

c.name = "Hank";
console.log(c);

// using DOT NOTATION, assign a METHOD to c

c.greet = () => "What it izz";
console.log(c);

// using BRACKET NOTATION, call the method in c

console.log(c["greet"()])

// print a, b, and c

consol
