var Person = function (name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}
Person.prototype.calcAge = function () {
    console.log(2020 - this.yearOfBirth);
}


var john = new Person("john", 1995);
var steve = new Person("Steve", 1991);
john.calcAge()
steve.calcAge()

console.log(john);