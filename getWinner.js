var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsNormal(["JD", "JC", "AC"]);

var handJoker2 = teenPattiScore.scoreHandsNormal(["8D", "JH", "JS"]);
console.log("HandOne", handJoker1);
console.log("HandTwo", handJoker2);
if (handJoker1.score > handJoker2.score) {
  console.log("Player 1 is Winner", handJoker1);
} else if (handJoker1.score == handJoker2.score) {
  console.log("Split Pot");
} else {
  console.log("Player 2 is Winner", handJoker2);
}
