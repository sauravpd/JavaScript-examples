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
	
	getLastName()
	{
		return this.lastName
	}
	
	getAge()
	{
		return this.age;
	}
}

const steve=new User('Steve','Anderson',25);
console.log(steve)

console.log('****************************')
console.log(steve.getFirstName());
console.log(steve.getLastName());
console.log(steve.getAge())
console.log('****************************')
// const Mike=new User();
// console.log(Mike);//undefined

