const { add } = require("../utils");

function sumHighScores(leaderBoard) {
  const runningTotal = 0;
  leaderBoard.forEach((player) => {
    runningTotal = add(runningTotal, leaderBoard[player]);
  });
  return runningTotal;
}

const scoreBoard = { David: 100, Ellie: 112, Rose: 14, Jim: 51 };

sumHighScores(scoreBoard); // should return 277
