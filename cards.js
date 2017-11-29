var _ = require("lodash");

module.exports.cardValue = function (card) {
    if (card.length == 2 && _.isString(card)) {
        var number = _.upperCase(_.head(card));
        var color = _.upperCase(_.tail(card));
        if (number == "A") {
            number = 1;
        } else if (number == "T") {
            number = 10;
        } else if (number == "J") {
            number = 11;
        } else if (number == "Q") {
            number = 12;
        } else if (number == "K") {
            number = 13;
        } else {
            number = parseInt(number);
        }
        switch (color) {
            case "C":
                color = "Clubs";
                break;
            case "S":
                color = "Spades";
                break;
            case "D":
                color = "Diamonds";
                break;
            case "H":
                color = "Hearts";
                break;
            default:
                console.error(new Error("Incorrect Card Color " + card));
                break;
        }
        if (_.isNaN(number)) {
            console.error(new Error("Incorrect Card Number " + card));
        }
        return {
            number: number,
            color: color,
            value: card
        };
    } else {
        console.error(new Error("Incorrect Card Value " + card));
    }
};