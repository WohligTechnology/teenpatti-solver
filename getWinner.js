var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsTwo(["Ac", "Kc"]);

var handJoker2 = teenPattiScore.scoreHandsTwo(["Ad", "2h"]);

if (handJoker1.score > handJoker2.score) {
  console.log("Player 1 is Winner", handJoker1);
} else if (handJoker1.score == handJoker2.score) {
  console.log("Split Pot");
} else {
  console.log("Player 2 is Winner", handJoker2);
}
