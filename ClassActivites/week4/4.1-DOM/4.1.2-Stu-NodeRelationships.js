// select the root node
console.log(document.getElementsByTagName("html"))
//ROOT IS ALWAYS THE HTML


// select the last child of the root node

console.log(document.querySelector("html").lastElementChild)

// select all the children the body element

console.log(document.querySelector("body").children)

// select the next sibling of the h2 node

console.log(document.querySelector("h2").nextElementSibling)

// select the parent element of the h1 node

console.log(document.querySelector("h1").parentElement)