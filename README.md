# teenpatti-solver
# teenpatti-solver

Importing file
```javascript
var teenPattiScore = require("teenpattisolver");
```

Find Score of Player in Normal Teen Patti Mode
```javascript
teenPattiScore.scoreHandsNormal(["As","Ad","Ac"]);
```


Find Score of Player in 2 Card Mode
```javascript
teenPattiScore.scoreHandsTwo(["As","Ad"]);
```


Find Score of Player in 4 Card Mode
```javascript
teenPattiScore.scoreHandsFour(["As","Ad","Ac","Ah"]);
```


Find Score of Player in Lowest Mode
```javascript
teenPattiScore.scoreHandsLowest(["2s","4d"]);
```