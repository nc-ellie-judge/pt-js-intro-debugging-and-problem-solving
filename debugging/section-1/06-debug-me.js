const { add } = require("../utils");

function sumHighScores(leaderBoard) {
  let runningTotal = 0;

  for (const player in leaderBoard) {
    runningTotal = add(runningTotal, leaderBoard[player])
  }

  return runningTotal;
}

const scoreBoard = { David: 100, Ellie: 112, Rose: 14, Jim: 51 };

console.log(sumHighScores(scoreBoard)); // should return 277
