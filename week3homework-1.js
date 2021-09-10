// Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = ["Pepperoni", "Sausage", "Chicken", "Bacon"];
let pizzaSize = ["Small", "Medium", "Large"];
let pizzaCrust = ["Thick", "Thin"];

/* Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings
by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..." */

function greetCustomer(a, b) {
return a + b;
}
let x = greetCustomer("Welcome to Danno's Pizza House, we have ", pizzaToppings);

console.log(x);


/* Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs prints the order,
i.e. "One large thick crust pizza with x, y, z, ... coming up!" outputs a list with the size, crust, and toppings. */

function getPizzaOrder(a, b, c, d) {
return a + b + c + d
}
let y = getPizzaOrder("Coming up: One " + pizzaSize[0] + pizzaCrust[0] + pizzaToppings[0]);


console.log(y);


/* Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings
prints something like "...Cooking pizza..." outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings. */

function getPizzaOrder(a, b, c, d) {
  return a + b + c + d
  }
  let z = getPizzaOrder("Coming up: One " + pizzaSize[0] + pizzaCrust[0] + pizzaToppings[0]);


  console.log(z);

/* Create a servePizza function that has a parameter of a pizza Object logs a message that the pizza is ready and repeats the order,
i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!" outputs the same pizza Object that was passed in */

function getPizzaOrder(a, b, c, d) {
  return a + b + c + d
  }
  let z = getPizzaOrder("Coming up: One " + pizzaSize[0] + pizzaCrust[0] + pizzaToppings[0]);


  console.log(z);

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input



// Add, commit, and push your JS file to your GitHub repo.

// Send your TA a link to your GitHub Homework repo when finished.
