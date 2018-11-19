var student = {
	firstName : "John",
	lastName : "Smith",
	age : 15
}
console.log(student)
console.log(student.firstName)
console.log(student['age'])
var x = 'age'
console.log(student[x])

student.firstName = "Steve";

console.log(student)

var obj = new Object;
console.log(obj)
obj.name = "steve"
obj.age=15
console.log(obj)