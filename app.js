var _ = require("lodash");
var teenPattiScore = require("./index");
var players = [{
        name: "1",
        cards: ["Ts", "2c"]
    },
    {
        name: "2",
        cards: ["Ac", "Kc"]
    },
    {
        name: "3",
        cards: ["2c", "2d"]
    },
    {
        name: "4",
        cards: ["5d", "6c"]
    },
    {
        name: "4",
        cards: ["Ad", "2d"]
    },
    {
        name: "5",
        cards: ["5d", "Td"]
    }
];


_.each(players, function (player) {
    console.log(teenPattiScore);
    player.details = teenPattiScore.scoreHandsTwo(player.cards);
    player.score = player.details.score;
});

var ranking = _.orderBy(players, function (n) {
    return n.score * -1;
});

console.log(ranking);