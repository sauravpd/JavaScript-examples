class User{
	constructor(firstName,lastName,age){
	this.firstName=firstName;
	this.lastName=lastName;
	this.age=age;
	}
	
	getFirstName()
	{
		return this.firstName;
	}
}

const steve=new User('Steve','Anderson',25);
console.log(steve)

console.log(steve.getFirstName());
// const Mike=new User();
// console.log(Mike);//undefined

