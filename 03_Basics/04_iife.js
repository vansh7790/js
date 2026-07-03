//Immediately invoked function expression (IIFE) is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
(function chai(){                       //Named iffe
    let username="John";
    console.log(username);
})();//John

((name)=>{
    console.log(`Hello $(name)`);
})("Alice");//Hello Alice
//IFFE are used to create a new scope and avoid polluting the global scope. They are also used to create a private scope for variables and functions.