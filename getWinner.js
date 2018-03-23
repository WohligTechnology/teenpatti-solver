var teenPattiScore = require("./index");
var handJoker1 = teenPattiScore.scoreHandsNormal(["9s", "9d", "3c"]);
console.log(handJoker1);
var handJoker2 = teenPattiScore.scoreHandsNormal(["As", "Ad", "4c"]);
console.log(handJoker2);
if (handJoker1.score > handJoker2.score) {
    console.log("Player 1 is Winner");
} else if (handJoker1.score == handJoker2.score) {
    console.log("Both have Same Score");
} else {
    console.log("Player 2 is Winner");
}