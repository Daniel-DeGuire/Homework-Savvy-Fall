// Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ["bacon", "sausage", "onions", "black olives"];


/* Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings
by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..." */

function greetCustomer(){
  let greeting = `Welcome to Danno's Pizza, our toppings are `
for (let toppings of pizzaToppings) {
  greeting += `${toppings}, `;
}
  console.log(greeting);
};
console.log(greetCustomer());



/* Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs prints the order,
i.e. "One large thick crust pizza with x, y, z, ... coming up!" outputs a list with the size, crust, and toppings. */

function getPizzaOrder(pizzaSize, pizzaCrust, pizzaToppings){
  console.log(`One ${pizzaSize} ${pizzaCrust} crust pizza with ${pizzaToppings} coming up!`);
  return [pizzaSize, pizzaCrust, pizzaToppings];
};

console.log(getPizzaOrder())



/* Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings
prints something like "...Cooking pizza..." outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings. */

function preparePizza(pizzaSize, pizzaCrust, pizzaToppings){
  console.log("...Cooking pizza...");

  return {size: pizzaSize, crust: pizzaCrust, toppings: pizzaToppings};
};
  console.log(preparePizza());

/* Create a servePizza function that has a parameter of a pizza Object logs a message that the pizza is ready and repeats the order,
i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!" outputs the same pizza Object that was passed in */

function servePizza({size: pizzaSize, crust: pizzaCrust, toppings: pizzaToppings}){
  console.log(`Order up! Here's your ${pizzaSize} ${pizzaCrust} crust pizza with ${pizzaToppings}. Enjoy!`);
  return {size: pizzaSize, crust: pizzaCrust, toppings: pizzaToppings};
};

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input

greetCustomer();
getPizzaOrder("large", "thick", pizzaToppings);
preparePizza(getPizzaOrder("large", "thick", pizzaToppings));
servePizza(preparePizza(["large", "thick", pizzaToppings]));

// Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"



// Add, commit, and push your JS file to your GitHub repo.

// Send your TA a link to your GitHub Homework repo when finished.
