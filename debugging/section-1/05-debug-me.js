const { multiply } = require("../utils");

function multiplyByFour(a) {
  return multiply(4, a);
}

console.log(multiplyByFour(5)); // should be 20
console.log(multiplyByFour(2)); // should be 8
