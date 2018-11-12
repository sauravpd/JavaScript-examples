markHeight=1.69;
johnHeight=1.95;
markMass=78;
johnMass=92;

var markBMI=bmi(markHeight, markMass);
var johnBMI=bmi(johnHeight,johnMass);
console.log(markBMI)
console.log(johnBMI)
var higherBMI=markBMI>johnBMI;

console.log("Is Mark's BMI higher than John's BMI ?	"+higherBMI);

function bmi(height,mass) 
{
	var BMI;
	BMI=mass/(height*height);
	return BMI;
}