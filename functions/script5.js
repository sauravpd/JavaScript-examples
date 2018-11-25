//console.log(this)

/*calculateage(1995)
function calculateage(year) {
	console.log(2018 - year)
	console.log(this)
}*/

var john = {
	name : 'John',
	year : 1998,
	calculateage : function() {
		console.log(this)
	}
}

john.calculateage();