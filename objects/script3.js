var john = {
	fullName : "John Smith",
	mass : 92,
	height : 1.95,
	calcBMI : function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var mark = {
	fullName : "Mark Miller",
	mass : 78,
	height : 1.79,
	calcBMI : function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

john.calcBMI();
mark.calcBMI();
console.log(john,mark)