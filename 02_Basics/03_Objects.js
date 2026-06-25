//Two ways of decalring object is js- Literal and constructor
//When constructor is used then singleton pattern is used to create an object and when literal is used then multiple objects can be created using the same structure

//Literal way of creating an object
mysym=Symbol('key1');//symbol is a primitive data type that is used to create unique identifiers for object properties. It is not visible in the console when we log the object but it is still there and can be accessed using the symbol variable.
const JsUser={
    name:'John',
    "full name":'John Doe',//property name can be a string with spaces but then we have to use bracket notation to access it
    age:30,
    [mysym]:'mykey1',//symbol is used as a property name and it is not visible in the console when we log the object but it is still there and can be accessed using the symbol variable.
    greet:function(){
        console.log("Hello, my name is "+ this.name + " and I am " + this.age + " years old.");
    },
    isLoggedIn:false,
    lastLoginDays:['Monday', 'Tuesday', 'Wednesday'],

}

console.log(JsUser.name);//accessing the name property of the object but this is not the best way to access the properties of an object because if the property name is changed then we have to change it in all the places where it is used. So, we can use destructuring to access the properties of an object.
console.log(JsUser["age"]);//accessing the age property of the object using bracket notation but this is not the best way to access the properties of an object because if the property name is changed then we have to change it in all the places where it is used. So, we can use destructuring to access the properties of an object.
console.log(JsUser["full name"]);//accessing the "full name" property of the object using bracket notation.
console.log(JsUser[mysym]);//accessing the symbol property of the object using the symbol variable.
JsUser.name='Jane';//changing the name property of the object
console.log(JsUser.name);
Object.freeze(JsUser);//freezes the object so that no new properties can be added to it and existing properties cannot be removed or changed. It is a shallow freeze so if the object has nested objects then they can still be changed.
JsUser.age=35;//this will not change the age property of the object because the object is frozen
console.log(JsUser.age);
JsUser.isLoggedIn=true;//this will not change the isLoggedIn property of the object because the object is frozen
console.log(JsUser);