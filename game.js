var _ = require("lodash");
var teenPattiScore = require("./app");
var players = [{
        name: "1",
        cards: ["Ts", "2c", "5s"]
    },
    {
        name: "2",
        cards: ["Ac", "Kc", "Qc"]
    },
    {
        name: "3",
        cards: ["2c", "2d", "2h"]
    },
    {
        name: "4",
        cards: ["5d", "6c", "6s"]
    },
    {
        name: "4",
        cards: ["Ad", "2d", "4d"]
    }
];


_.each(players, function (player) {
    player.details = teenPattiScore(player.cards);
    player.score = player.details.score;
});

var ranking = _.orderBy(players, function (n) {
    return n.score * -1;
});

console.log(ranking);