var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsNormal(["Ac", "Kc", "Qd"]);

var handJoker2 = teenPattiScore.scoreHandsNormal(["Ad", "2h", "3c"]);

if (handJoker1.score > handJoker2.score) {
  console.log("Player 1 is Winner", handJoker1);
} else if (handJoker1.score == handJoker2.score) {
  console.log("Split Pot");
} else {
  console.log("Player 2 is Winner", handJoker2);
}
