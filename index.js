var _ = require("lodash");
var Combinatorics = require('js-combinatorics');
var cards = require("./cards");


function scoreHandsNormal(playerCards) {
    if (playerCards.length == 3) {
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
        handStatus.name = "High Card";
        if (clonePlayerCards[0].number == 1) {
            handStatus.card1 = 14;
            handStatus.card2 = clonePlayerCards[2].number;
            handStatus.card3 = clonePlayerCards[1].number;
            handStatus.desc = "High Card of A";
        } else {
            handStatus.card1 = clonePlayerCards[2].number;
            handStatus.card2 = clonePlayerCards[1].number;
            handStatus.card3 = clonePlayerCards[0].number;
            handStatus.desc = "High Card of " + cards.keyToString(handStatus.card1);
        }

        // Pair
        if (sameNumberCount == 2) {
            handStatus.name = "Pair";
            handStatus.no = 1;
            _.each(groupByNumber, function (n, key) {
                if (n.length == 2) {
                    handStatus.card1 = key;
                    handStatus.desc = "Pair of " + cards.keyToString(key);
                } else {
                    handStatus.card2 = key;
                }
            });
            handStatus.card3 = 0;
        }

        // Color
        if (sameColorCount == 1) {
            handStatus.no = 2;
            handStatus.name = "Color";
            handStatus.desc = "Color of " + cards.keyToString(handStatus.card1) + " High";
        }

        // Sequence
        if (isSequence) {
            handStatus.no = 3;
            handStatus.name = "Sequence";
            handStatus.desc = "Sequence of " + cards.keyToString(handStatus.card1) + " High";
        }

        // Pure Sequence
        if (sameColorCount == 1 && isSequence) {
            handStatus.no = 4;
            handStatus.name = "Pure Sequence";
            handStatus.desc = "Pure Sequence of " + cards.keyToString(handStatus.card1) + " High";
        }

        // Trio
        if (sameNumberCount == 1) {
            handStatus.no = 5;
            handStatus.name = "Trio";
            handStatus.desc = "Trio of " + cards.keyToString(handStatus.card1);
        }


        handStatus.score = (handStatus.no * 1000000) + (handStatus.card1 * 10000) + (handStatus.card2 * 100) + (handStatus.card3 * 1);
        return {
            name: handStatus.name,
            desc: handStatus.desc,
            score: handStatus.score
        };
    } else {
        console.err(new Error("Number of cards in Score Hands Incorrect"));
    }
}

function scoreHandsTwo(playerCards) {
    if (playerCards.length == 2) {
        var clonePlayerCards = _.sortBy(_.map(playerCards, function (n) {
            return cards.cardValue(n);
        }), "number");
        var handStatus = {};

        var groupByNumber = _.groupBy(clonePlayerCards, "number");
        var groupByColor = _.groupBy(clonePlayerCards, "color");
        var sameNumberCount = _.keys(groupByNumber).length;
        var sameColorCount = _.keys(groupByColor).length;

        var diff1 = clonePlayerCards[1].number - clonePlayerCards[0].number;
        var isSequence = (diff1 == 1) || (clonePlayerCards[0].number == 1 && clonePlayerCards[1].number == 13);

        // High Card
        handStatus.no = 0;
        handStatus.name = "High Card";
        if (clonePlayerCards[0].number == 1) {
            handStatus.card1 = 14;
            handStatus.card2 = clonePlayerCards[1].number;
            handStatus.desc = "High Card of A";
        } else {
            handStatus.card1 = clonePlayerCards[1].number;
            handStatus.card2 = clonePlayerCards[0].number;
            handStatus.desc = "High Card of " + cards.keyToString(handStatus.card1);
        }

        // Color
        if (sameColorCount == 1) {
            handStatus.no = 1;
            handStatus.name = "Color";
            handStatus.desc = "Color of " + cards.keyToString(handStatus.card1) + " High";
        }

        // Sequence
        if (isSequence) {
            handStatus.no = 2;
            handStatus.name = "Sequence";
            handStatus.desc = "Sequence of " + cards.keyToString(handStatus.card1) + " High";
        }

        // Pure Sequence
        if (sameColorCount == 1 && isSequence) {
            handStatus.no = 3;
            handStatus.name = "Pure Sequence";
            handStatus.desc = "Pure Sequence of " + cards.keyToString(handStatus.card1) + " High";
        }

        // Pair
        if (sameNumberCount == 1) {
            handStatus.no = 4;
            handStatus.name = "Pair";
            handStatus.desc = "Pair of " + cards.keyToString(handStatus.card1);
        }


        handStatus.score = (handStatus.no * 10000) + (handStatus.card1 * 100) + (handStatus.card2 * 1);
        return {
            name: handStatus.name,
            desc: handStatus.desc,
            score: handStatus.score
        };
    } else {
        console.err(new Error("Number of cards in Score Hands Incorrect"));
    }
}

function scoreHandsFour(playerCards) {
    if (playerCards.length == 4) {
        var only3Cards = Combinatorics.combination(playerCards, 3);
        var playerCombinations = [];
        while (a = only3Cards.next()) {
            var obj = {
                cards: a,
                details: scoreHandsNormal(a),
                remainingCard: _.head(_.difference(playerCards, a)),
            };
            obj.remainingPoints = cards.numberValue(obj.remainingCard);
            obj.details.score = obj.details.score * 100 + obj.remainingPoints;
            playerCombinations.push(obj);
        }
        var playerScoreObj = _.maxBy(playerCombinations, function (n) {
            return n.details.score;
        });
        return playerScoreObj.details;
    } else {
        console.err(new Error("Number of cards in Score Hands Incorrect"));
    }
}


function scoreHandsLowest(playerCards) {
    var retVal = scoreHandsNormal(playerCards);
    retVal.score = 10000000 - retVal.score;
    return retVal;
}

var retObj = {
    scoreHandsNormal: scoreHandsNormal,
    scoreHandsTwo: scoreHandsTwo,
    scoreHandsFour: scoreHandsFour,
    scoreHandsLowest: scoreHandsLowest
};
module.exports = retObj;