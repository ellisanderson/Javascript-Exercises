var array1 = ["apples", "oranges", "banana"];
var array2 = ["lettuce", "kale", "spinach", "cauliflower"];

function longest() {
  if (array1.length < array2.length) {
    return array2;
  } else {
    return array1;
  }
}

console.log(longest());
