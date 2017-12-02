var teenPattiScore = require("./index");

var handNormal = teenPattiScore.scoreHandsNormal(["Js", "Ks", "Qs"]);
var handNormal2 = teenPattiScore.scoreHandsNormal(["Ac", "2c", "3c"]);

console.log(handNormal);
console.log(handNormal2);


var handTwo = teenPattiScore.scoreHandsTwo(["As", "Ad"]);
// handTwo: {
//     name: 'Pair',
//     desc: 'Pair of A',
//     score: 41401
// }


var handFour = teenPattiScore.scoreHandsFour(["As", "Ad", "Ac", "Ah"]); // Best of 3
// handFour: {
//     name: 'Trio',
//     desc: 'Trio of A',
//     score: 514010114
// }

var handLowest = teenPattiScore.scoreHandsLowest(["2s", "3d", "5c"]);
// handLowest: {
//     name: 'High Card',
//     desc: 'High Card of 5',
//     score: 9949698
// }