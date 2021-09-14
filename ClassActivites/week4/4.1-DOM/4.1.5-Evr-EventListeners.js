// add an event listener to the dog picture that listens for a "click" and gives an alert

document
    .querySelector("#dog-picture")
    .addEventListed("dblclick"), () => ("The image was double clicked");
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color

document
    .querySelector("#class-schedule-list")
    .addEvenListener("mouseover", even => (event.target.style.backgroundColor = "red"))
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed

document
    .querySelector("body")
    .addEvenListener("keydown", event => console.log(even.key));