var arrObj=[10,20,30,40,50];
for (var index = 0; index < arrObj.length; index++) {
    if(arrObj[index]===30)
    {
        continue;
    }   
    console.log(arrObj[index]); 
}

/**
 * output
 * 10
 * 20
 * 40
 * 50
 */