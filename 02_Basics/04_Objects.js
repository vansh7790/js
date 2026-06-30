//Object using constructor function
const users= new Object();//creating an object using constructor function
users.id=1;
users.name='John';
users.isLoggedIn=false;
 
//Objects inside objects
const userDetails={
    email:"some@example.com",
    fullname:{
        firstName:"John",
        lastName:"Doe"
    },
}

//combining objects
const obj1={a:1, b:2}
const obj2={c:3, d:4}
const obj3=Object.assign({},obj1,obj2)//Using Object.assign() to combine objects but this is not the best way to combine objects because it creates a new object and copies the properties of the source objects into the new object. If the source objects have properties with the same name then the last source object's property will overwrite the previous source object's property. So, we can use spread operator to combine objects.
const obj4={...obj1,...obj2}//using spread operator to combine objects


console.log(Object.keys(users));//returns an array of the object's own enumerable property names
console.log(Object.values(users));//returns an array of the object's own enumerable property values
console.log(Object.entries(users));//returns an array of the object's own enumerable property [key, value] pairs...array ke andar array hoga jisme pehla element key hoga aur dusra element value hoga.


console.log(users.hasOwnProperty('name'));//returns true if the object has the specified property as its own property (not inherited), otherwise false.
