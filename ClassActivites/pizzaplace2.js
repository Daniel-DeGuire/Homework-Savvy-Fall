// Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ["Pepperoni", "Sausage", "Chicken", "Bacon"];
const pizzaCount = ["One", "Two", "Three"]
const pizzaCrust = ["Thick", "Thin"];
const pizzaSize = ["Large", "Medium"];
const orderText = "coming up.";
const prepareText = "Cooking pizza"

/* Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings
by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..." */

let greetCustomer = "Welcome to Pizza House our toppings are: ";
for (let i = 0; i < pizzaToppings.length; i++) {
  greetCustomer += pizzaToppings[i] + " ";
}
console.log(greetCustomer);

/* Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs prints the order,
i.e. "One large thick crust pizza with x, y, z, ... coming up!" outputs a list with the size, crust, and toppings. */

let getPizzaOrder = "Coming up: " + pizzaCount[0] + " " + pizzaCrust[0] + " ";
for (let i = 0; i < pizzaToppings.length; i++) {
  getPizzaOrder += pizzaToppings[i] + " ";
}

console.log(getPizzaOrder);


/* Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings
prints something like "...Cooking pizza..." outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings. */

let getPreparePizza = "Cooking up: " + pizzaCount[0] + " " + pizzaCrust[0] + " ";
for (let i = 0; i < pizzaToppings.length; i++) {
  getPreparePizza += pizzaToppings[i] + " ";
}

console.log(getPreparePizza);

/* Create a servePizza function that has a parameter of a pizza Object logs a message that the pizza is ready and repeats the order,
i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!" outputs the same pizza Object that was passed in */

let getServePizza = "Order up! Here's your: " + pizzaCount[0] + " " + pizzaCrust[0] + " ";
for (let i = 0; i < pizzaToppings.length; i++) {
  getServePizzaPizza += pizzaToppings[i] + " ";
}

console.log(getServePizza);

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input



// Add, commit, and push your JS file to your GitHub repo.

// Send your TA a link to your GitHub Homework repo when finished.