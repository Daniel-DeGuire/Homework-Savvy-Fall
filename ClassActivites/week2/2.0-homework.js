// 4. Inside your JS file, create two variables: pizzaPlace and numberOfToppings
// 5. Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.

let pizzaPlace = "Danno's Pizza Place";
let numberOfToppings = 5;

// 6. Print the variables and their types.

console.log(pizzaPlace, "has", numberOfToppings, "toppings");
console.log(typeof pizzaPlace, typeof numberOfToppings);

// 7. Print a template literal that uses both variables to construct a short sentence about your Pizza Place.

console.log(`Hello, welcome to ${pizzaPlace} we have ${numberOfToppings} toppings.`);

// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if (numberOfToppings < 10) {
        console.log("Quality, not quantity");
    } else {
        console.log("A whole lot of pizza.");
    }
// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

for (let i = 1; i <= numberOfToppings; i++) {
    if (i % 2 == 0) {
      console.log(i)

    }
  }

// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished