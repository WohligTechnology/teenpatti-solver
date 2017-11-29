var _ = require("lodash");
var cards = require("./cards");

function rankHands(playerCards) {
    var clonePlayerCards = _.sortBy(_.map(playerCards, function (n) {
        return cards.cardValue(n);
    }), "number");
    var handStatus = {};

    var groupByNumber = _.groupBy(clonePlayerCards, "number");
    var groupByColor = _.groupBy(clonePlayerCards, "color");
    var sameNumberCount = _.keys(groupByNumber).length;
    var sameColorCount = _.keys(groupByColor).length;

    var diff1 = clonePlayerCards[1].number - clonePlayerCards[0].number;
    var diff2 = clonePlayerCards[2].number - clonePlayerCards[1].number;
    var isSequence = (diff1 == diff2 && diff2 == 1) || (clonePlayerCards[0].number == 1 && clonePlayerCards[1].number == 12 && clonePlayerCards[2].number == 13);


    // High Card
    handStatus.no = 0;
    if (clonePlayerCards[0].number == 1) {
        handStatus.handRanking = "High Card";
        handStatus.card1 = 14;
        handStatus.card2 = clonePlayerCards[2].number;
        handStatus.card3 = clonePlayerCards[1].number;
    } else {
        handStatus.handRanking = "High Card";
        handStatus.card1 = clonePlayerCards[2].number;
        handStatus.card2 = clonePlayerCards[1].number;
        handStatus.card3 = clonePlayerCards[0].number;
    }

    // Pair
    if (sameNumberCount == 2) {
        handStatus.handRanking = "Pair";
        handStatus.no = 1;
        _.each(groupByNumber, function (n, key) {
            if (n.length == 2) {
                handStatus.card1 = key;
            } else {
                handStatus.card2 = key;
            }
        });
        handStatus.card3 = 0;
    }

    // Color
    if (sameColorCount == 1) {
        handStatus.no = 2;
        handStatus.handRanking = "Color";
    }

    // Sequence
    if (isSequence) {
        handStatus.no = 3;
        handStatus.handRanking = "Sequence";
    }

    // Pure Sequence
    if (sameColorCount == 1 && isSequence) {
        handStatus.no = 4;
        handStatus.handRanking = "Pure Sequence";
    }

    // Trio
    if (sameNumberCount == 1) {
        handStatus.no = 5;
        handStatus.handRanking = "Trio";
    }


    handStatus.score = (handStatus.no * 1000000) + (handStatus.card1 * 10000) + (handStatus.card2 * 100) + (handStatus.card3 * 1);
    return handStatus;
}




var players = [

    {
        name: "1",
        cards: ["As", "Ks", "Js"]
    },
    {
        name: "2",
        cards: ["Ac", "Kc", "Qc"]
    },
    {
        name: "3",
        cards: ["2c", "2d", "2h"]
    }


];


_.each(players, function (player) {
    player.details = rankHands(player.cards);
    player.score = player.details.score;
});

var ranking = _.orderBy(players, function (n) {
    return n.score * -1;
});
console.log(ranking);