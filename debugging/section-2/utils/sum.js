function sumArray(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

module.exports = { sumArray };