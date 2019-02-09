class User
{
	constructor(firstName,lastName,age)
	{
	this.firstName=firstName;
	this.lastName=lastName;
	this.age=age;
	}
}

const steve=new User('Steve','Anderson',25);
console.log(steve)

const Mike=new User();
console.log(Mike);//undefined