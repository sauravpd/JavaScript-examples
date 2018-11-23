var student = {
	firstName : "John",
	lastName : "Smith",
	age : 15,
	show : function() {
		console.log(this.firstName + " " + this.lastName)
	}
}
student.show()