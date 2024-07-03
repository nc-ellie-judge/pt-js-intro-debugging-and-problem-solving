function returnLastDigit(num) {
  return num.toString().slice(-1)
}

console.log(returnLastDigit(1001)); // should return 1
console.log(returnLastDigit(4598)); // should return 8
console.log(returnLastDigit(359579)) // should return 9
