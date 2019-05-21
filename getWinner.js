var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsJokers(
  ["Ac", "Kc", "5d"],
  ["5c", "Kd"]
);

var handJoker2 = teenPattiScore.scoreHandsJokers(
  ["Kd", "5h", "6d"],
  ["5c", "Kd"]
);

if (handJoker1.score > handJoker2.score) {
  console.log("Player 1 is Winner", handJoker1);
} else if (handJoker1.score == handJoker2.score) {
  console.log("Split Pot");
} else {
  console.log("Player 2 is Winner", handJoker2);
}
