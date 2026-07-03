console.log("H");
console.log("e");
console.log("l");
console.log("l");
console.log("o");

function greet(name){
    console.log(`Hello ${name}`);
}
greet("Alice");

function add(a,b){   //a and b are parameters of the function add. Parameters are variables that are used to pass values to a function. When we call the function, we can pass values to the parameters. These values are called arguments. In this case, a and b are parameters of the function add and when we call the function add(5, 10), 5 and 10 are arguments.
    if(typeof a !== 'number' || typeof b !== 'number'){
        return "Please provide valid numbers";
    }
    return a+b;
}
console.log(add(5, 10));// 5 and 10 are arguments of the function add. Arguments are the values that are passed to a function when it is called. In this case, 5 and 10 are arguments of the function add and they are passed to the parameters a and b respectively. The function add takes these arguments and returns their sum which is 15 in this case.
console.log(add("5", "10"));

// Shopping cart fucntion//Rest operator 
function calclateCartPrice(...num1){//...here is called rest operator. It allows us to pass an arbitrary number of arguments to a function. In this case, we are passing an arbitrary number of arguments to the function calclateCartPrice and they are stored in the array num1. The rest operator is used to collect all the remaining arguments passed to the function into a single array. In this case, all the arguments passed to the function calclateCartPrice are collected into the array num1.
    let total = 0;
    for(let i=0; i<num1.length; i++){
        total += num1[i];
    }
    return total;
}
console.log(calclateCartPrice(100, 200, 300, 400, 500));//100, 200, 300, 400, 500 are arguments of the function calclateCartPrice. Arguments are the values that are passed to a function when it is called. In this case, 100, 200, 300, 400, 500 are arguments of the function calclateCartPrice and they are passed to the parameter num1 respectively. The function calclateCartPrice takes these arguments and returns their sum which is 1500 in this case.

//Objects as arguments
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
function printPersonDetails(user){
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
}
printPersonDetails(person);
//or
printPersonDetails({
    name: "Jane",
    age: 25,
    city: "Los Angeles"
});


//Arrays as arguments
const numbers = [1, 2, 3, 4, 5];
function printNumbers(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
printNumbers(numbers);
