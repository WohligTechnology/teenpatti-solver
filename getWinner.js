var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsJoker(["Qc", "5d", "3h"], "Qc");
console.log(handJoker1);
var handJoker2 = teenPattiScore.scoreHandsJoker(["Qs", "9d", "3d"], "Qc");
console.log(handJoker2);
if (handJoker1.score > handJoker2.score) {
    console.log("Player 1 is Winner");
} else if (handJoker1.score == handJoker2.score) {
    console.log("Both have Same Score");
} else {
    console.log("Player 2 is Winner");
}