var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsNormal(["Jh", "Jd", "Td"]);
var handJoker2 = teenPattiScore.scoreHandsNormal(["Jh", "Jd", "Ac"]);
console.log(handJoker1, handJoker2);
if (handJoker1.score > handJoker2.score) {
  console.log("Player 1 is Winner", handJoker1);
} else if (handJoker1.score == handJoker2.score) {
  console.log("Split Pot");
} else {
  console.log("Player 2 is Winner", handJoker2);
}
