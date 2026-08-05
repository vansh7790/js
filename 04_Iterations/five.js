//For each loop-It brings the value of each element, the whole array and all the indexes of the array as arguments to the callback function. It is used to iterate over arrays and perform an action on each element of the array. It does not return a new array, it just performs an action on each element of the array.

const arr = [1, 2, 3, 4, 5];
arr.forEach(function(num, index, array){
    console.log(num, index, array);
});//Callback function is used in forEach loop, it takes each element of the array and passes it to the callback function as an argument. The callback function then logs the element to the console.

arr.forEach((num) => console.log(num));//Arrow function can also be used in forEach loop.
//Array of objects
const users = [
    {name: 'John',
     age: 30},
    {name: 'Jane', 
     age: 25},
    {name: 'Bob',
     age: 35}
];
users.forEach((user) => console.log(user.name, user.age));//Here we are using forEach loop to iterate over an array of objects and log the name and age of each user to the console.
