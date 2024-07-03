const { check, runTest, skipTest } = require("../../test-api/index.js");

function calculateJump(locations, jumpLength) {
  /*
  You will be given an array containing string representations of the locations of a cat and multiple mice. 
  You will also be given a positive integer which represents how far the cat can jump.
  
  Your task is to calculate how many, if any, mice can the cat catch in one jump. 
  
  Each space "x" expends 1 of the cat's movement. 
  The cat will always go for the highest number of mice it can catch if there are mice before and after 
  it in the array.
  */

  const catIndex = locations.indexOf("cat")
  const beforeCat = locations.slice(0, catIndex)
  const afterCat = locations.slice(catIndex, locations.length)
  const numberOfMiceBeforeCat = beforeCat.filter((item) => item === "mouse").length
  const numberOfMiceAfterBefore = afterCat.filter((item) => item === "mouse").length
  let jumpSlice = []

  if (numberOfMiceBeforeCat > numberOfMiceAfterBefore) {
    jumpSlice = beforeCat.slice(-jumpLength)
  }
  else {
    jumpSlice = afterCat.slice(1, jumpLength + 1)
  }

  return jumpSlice.filter((item) => item === "mouse").length
}

runTest(
  "cat catches mice when they are in one direction in the array",
  function () {
    check(calculateJump(["cat", "x", "mouse"], 5)).isEqualTo(1);
    check(calculateJump(["cat", "mouse", "x", "mouse"], 3)).isEqualTo(2);
    check(calculateJump(["mouse", "mouse", "mouse", "x", "cat"], 3)).isEqualTo(
      2
    );
  }
);

runTest("cat goes for the most mice it can catch", function () {
  check(calculateJump(["mouse", "cat", "mouse", "mouse"], 2)).isEqualTo(2);
  check(
    calculateJump(["mouse", "x", "mouse", "cat", "x", "x", "mouse"], 3)
  ).isEqualTo(2);
});
