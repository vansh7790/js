const user={
    name: "John",
    age: 30,
    city: "New York",
    price: 100,

    welcome: function(){
        console.log(`Welcome ${this.name}`);
        console.log(this)//"This " keyword refers to the object that is calling the method. In this case, the object user is calling the method welcome, so "this" refers to the user object. Therefore, this.name refers to the name property of the user object, which is "John". The output of this line will be "Welcome John".
    }
}

user.welcome();//Welcome John
user.name="Jane";
user.welcome();//Welcome Jane
//Here "This" refers to the current context basically...in this case the context of object.


//What if you did console.log(this) in the global scope? It will refer to the global object which is window in browser and global in node.js. In strict mode it will be undefined.
console.log(this);//In browser it will refer to """""window object""""" and in node.js it will refer to global object. In strict mode it will be undefined.

function chai(){
    let username="John";
    console.log(this.username);//Undefined because "this" refers to the global object and there is no property called username in the global object. In strict mode it will be undefined.
    console.log(this);//In browser it will refer to """""window object""""" and in node.js it will refer to global object. In strict mode it will be undefined.
}
chai();

//Arrow function
const chai=()=>{
    let username="John";
    console.log(this.username);//Undefined because "this" refers to the global object and there is no property called username in the global object. In strict mode it will be undefined.
    console.log(this);//In browser it will refer to """""window object""""" and in node.js it will refer to global object. In strict mode it will be undefined.
}
chai();

//Arrow function
const chai=()=>{
    let username="John";
    console.log(this.username);//Undefined because "this" refers to the global object and there is no property called username in the global object. In strict mode it will be undefined.
    console.log(this);//In browser it will refer to """""window object""""" and in node.js it will refer to global object. In strict mode it will be undefined.
}
chai();

const addtwo=(num)=>{
    return num + 2;
}
console.log(addtwo(5))//7

//OR Implicit return

const addTwo=(num)=> (num+2);//Curly braces me return keyword use karna hoga but agar curly braces nahi use karte to return keyword use nahi karna hoga. In this case, the function will return the value of num + 2 without the need for an explicit return statement.
console.log(addTwo(5))//7

