const multiply = require("../utils");
function multiplyByFour(a) {
  return multiply(4, a);
}

multiplyByFour(5); // should be 20
multiplyByFour(2); // should be 8
