let a=10
const b=20
var c=30
function test(){//function scope 
    let a=100
    const b=200
    var c=300
    console.log(a,b,c)
}

//expression function
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(5)) 
