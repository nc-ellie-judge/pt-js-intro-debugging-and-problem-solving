const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function returnMentorString(mentor) {
  return "Hello" + Mentor + "!";
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest('Get returnMentorString to return "Hello Hannah!"', function () {
  check(returnMentorString("Hannah")).isEqualTo("Hello Hannah!");
});
runTest('Get returnMentorString to return "Hello Lewis!"', function () {
  check(returnMentorString("Lewis")).isEqualTo("Hello Lewis!");
});
runTest('Get returnMentorString to return "Hello Harrison!"', function () {
  check(returnMentorString("Harrison")).isEqualTo("Hello Harrison!");
});