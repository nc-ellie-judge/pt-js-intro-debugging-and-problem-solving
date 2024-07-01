function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  a * b;
}

function divide(a, b) {
  return a / b;
}

const subtract = (a, b) => a - b;

module.exports = { multiply, add, subtract: subtract() };
