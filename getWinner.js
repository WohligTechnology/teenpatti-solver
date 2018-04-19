var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsNormal(["Ac", "2c", "3d"]);

var handJoker2 = teenPattiScore.scoreHandsNormal(["Kd", "Qd", "Jc"]);

if (handJoker1.score > handJoker2.score) {
    console.log("Player 1 is Winner");
} else if (handJoker1.score == handJoker2.score) {
    console.log("Split Pot");
} else {
    console.log("Player 2 is Winner");
}