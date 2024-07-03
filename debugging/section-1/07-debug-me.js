const { subtract } = require("../utils");

function checkIfHarrisonCanBuy(money, product) {
  const carBootPrices = {
    "Groovy-Chick Roller Skates": 4,
    "Broken Guitar": 6,
    "Mysterious Box": 1,
    "Used Dentures": 100,
    "500 Piece, Rare Bottle Cap Collection": 1,
  };

  if (subtract(money, carBootPrices[product]) > 0) { // rearranged money and carbootprices to make more readable
    return `Harrison can buy ${product}!`;
  }
  return `Harrison can not buy ${product} :(`;
}

console.log(checkIfHarrisonCanBuy(50, "Groovy-Chick Roller Skates"))
// should return  "Harrison can buy Groovy-Chick Roller Skates!""

console.log(checkIfHarrisonCanBuy(50, "Used Dentures"))
// should return "Harrison can not buy Used Dentures :("
