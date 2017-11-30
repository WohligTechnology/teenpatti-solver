# Teen Patti Solver for Node.Js


Install
```javascript
npm install teenpattisolver
```


Importing file
```javascript
var teenPattiScore = require("teenpattisolver");
```

Find Score of Player in Normal Teen Patti Mode
```javascript
var handNormal = teenPattiScore.scoreHandsNormal(["As", "Ad", "Ac"]);
// handNormal : {
//     name: 'Trio',
//     desc: 'Trio of A',
//     score: 5140101
// }
```


Find Score of Player in 2 Card Mode
```javascript
var handTwo = teenPattiScore.scoreHandsTwo(["As", "Ad"]);
// handTwo: {
//     name: 'Pair',
//     desc: 'Pair of A',
//     score: 41401
// }
```


Find Score of Player in 4 Card Mode (Best of 3 from 4 cards, 4th Card is considered if they have similar 3 cards)
```javascript
var handFour = teenPattiScore.scoreHandsFour(["As", "Ad", "Ac", "Ah"]); // Best of 3
// handFour: {
//     name: 'Trio',
//     desc: 'Trio of A',
//     score: 514010114
// }
```


Find Score of Player in Lowest Mode
```javascript
var handLowest = teenPattiScore.scoreHandsLowest(["2s", "3d", "5c"]);
// handLowest: {
//     name: 'High Card',
//     desc: 'High Card of 5',
//     score: 9949698
// }
```



