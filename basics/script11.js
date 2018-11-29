var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreMike, scoreJohn)
if (scoreJohn > scoreMike) {
	console.log("Johns team wins with " + scoreJohn + " points")
} else if (scoreMike > scoreJohn) {
	console.log("Mikes team wins with " + scoreMike + " points")
} else {
	console.log("there is draw")
}