var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsNormal(["As", "Kd", "Qh"]);
console.log(handJoker1);
var handJoker2 = teenPattiScore.scoreHandsNormal(["As", "2d", "3d"]);
console.log(handJoker2);
if (handJoker1.score > handJoker2.score) {
    console.log("Player 1 is Winner");
} else if (handJoker1.score == handJoker2.score) {
    console.log("Both have Same Score");
} else {
    console.log("Player 2 is Winner");
}