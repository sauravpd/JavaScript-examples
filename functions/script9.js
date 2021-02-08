// callback function

function a(b){
console.log("a")
b()
}


a(function b(){
    console.log("b")
 })