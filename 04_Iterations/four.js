const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};
//For in loop
for(const key in myObject){
    console.log(key, '-:', myObject[key]);
}

//On arrays
const myArray = ['apple', 'banana', 'orange'];
for(const index in myArray){
    console.log(index, '-:', myArray[index]);
}
//Basically for in loop is different from for of loop, for in loop is used to iterate over the properties of an object, while for of loop is used to iterate over the values of an iterable object like an array or a string.
//For in loop cannot be used to iterate over maps, because maps are not objects, they are iterable objects. So we can use for of loop to iterate over maps.
