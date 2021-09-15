const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"

console.log("this is the first index of a ", arr.indexOf("a"));
console.log("this is the first index of b ", arr.indexOf("b"));
console.log("this is the first index of c ", arr.indexOf("c"));

// find the last index of "a", "b", and "c"
console.log("This  is the last index of a", arr.lastIndexOf("a"));
console.log("This  is the last index of b", arr.lastIndexOf("b"));
console.log("This  is the last index of c", arr.lastIndexOf("c"));



// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

"a"
function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex){
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
    
    console.log(duplicatedValue)
    
    
  }
  return array
}
console.log(arr)
removeDuplicates(arr, "a");
console.log("After removing A's", arr);
removeDuplicates(arr, "b");
console.log("after removing B's", arr);
removeDuplicates(arr, "c");
console.log("after removing C's", arr);