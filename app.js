var _ = require("lodash");
var cards = require("./cards");

function rankHands(playerCards) {
    var clonePlayerCards = _.sortBy(_.map(playerCards, function (n) {
        return cards.cardValue(n);
    }), "number");
    var handStatus = {};

    console.log(clonePlayerCards);

    var sameNumberCount = _.keys(_.groupBy(clonePlayerCards, "number")).length;
    var sameColorCount = _.keys(_.groupBy(clonePlayerCards, "color")).length;

    console.log(sameNumberCount);
    console.log(sameColorCount);

    var diff1 = clonePlayerCards[1].number - clonePlayerCards[0].number;
    var diff2 = clonePlayerCards[2].number - clonePlayerCards[1].number;
    var isSequence = (diff1 == diff2 && diff2 == 1) || (clonePlayerCards[0].number == 1 && clonePlayerCards[1].number == 12 && clonePlayerCards[2].number == 13);


    // High Card
    if (clonePlayerCards[0].number == 1) {
        handStatus.handRanking = "High Card";
        handStatus.card = "A";
    } else {
        handStatus.handRanking = "High Card";
        handStatus.card = _.head(clonePlayerCards[2].value);
    }

    // Pair
    if (sameNumberCount == 2) {
        handStatus.handRanking = "Pair";
    }

    // Color
    if (sameColorCount == 3) {
        handStatus.handRanking = "Color";
    }

    // Sequence
    else if (isSequence) {
        handStatus.handRanking = "Sequence";
    }

    // Pure Sequence
    if (sameColorCount == 3 && isSequence) {
        handStatus.handRanking = "Pure Sequence";
    }

    // Trio
    if (sameNumberCount == 1) {
        handStatus.handRanking = "Trio";
    }
}

rankHands(["Kc", "Qs", "Ad"]);