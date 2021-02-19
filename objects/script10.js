class Employee{

    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

}
const empObj=new Employee("Steve",25);
console.log(empObj.name)
console.log(empObj.age)

console.log(empObj.getName)
console.log(empObj.getAge)
