const { check, runTest, skipTest } = require("../../test-api/index.js");

function carrotCropCount(gardenPatch) {
  /*
  Spring came, the desire to have a veggie garden overwhelmed you and so you planted some seeds. 
  Now they are all grown, how many are carrots?

  You are given a garden patch represented by a nested array. Count the total number of carrots found, and return it.
  */

  const flattenedGarden = gardenPatch.flat()
  let carrotCount = 0
  flattenedGarden.forEach((vegetable) => vegetable === "carrot" ? carrotCount++ : null)
  return carrotCount
}

runTest("counts the carrots when there are only carrots present", function () {
  check(carrotCropCount([["carrot"]])).isEqualTo(1);
  check(carrotCropCount([["carrot", "carrot"]])).isEqualTo(2);
  check(carrotCropCount([["carrot"], ["carrot"]])).isEqualTo(2);
  check(
    carrotCropCount([
      ["carrot", "carrot"],
      ["carrot", "carrot"],
      ["carrot", "carrot"],
    ])
  ).isEqualTo(6);
});

runTest("counts the carrots given mixed veg patch", function () {
  check(carrotCropCount([["carrot", "cabbage"]])).isEqualTo(1);
  check(
    carrotCropCount([["carrot", "radish", "carrot", "beetroot"]])
  ).isEqualTo(2);
  check(carrotCropCount([["carrot", "broccoli"], ["carrot"]])).isEqualTo(2);
  check(
    carrotCropCount([
      ["carrot", "artichoke"],
      ["potato", "beans"],
      ["carrot", "carrot"],
    ])
  ).isEqualTo(3);
});
