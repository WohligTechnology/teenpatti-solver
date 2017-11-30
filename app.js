var _ = require("lodash");
var teenPattiScore = require("./index");
var players = [{
    name: "1",
    cards: ["Ts", "2c", "5d", "Td"]
}];


_.each(players, function (player) {
    player.details = teenPattiScore.scoreHandsFour(player.cards);
    player.score = player.details.score;
});

var ranking = _.orderBy(players, function (n) {
    return n.score * -1;
});

console.log(ranking);