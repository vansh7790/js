const myArr=[1, 2, 3, 4, 5]; //Array may contain different types of data like numbers, strings, objects, etc. It is a collection of data.
const myheroes=['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Captain America'];
console.log(myArr[0]);//returns the first element of the array
console.log(myArr.length);//returns the length of the array
myArr.push(6);//adds an element to the end of the array
console.log(myArr);
myArr.pop();//removes the last element of the array
console.log(myArr);
myArr.shift();//removes the first element of the array
console.log(myArr);
myArr.unshift(0);//adds an element to the beginning of the array
console.log(myArr);
console.log(myArr.includes(3));//returns true if the array contains the specified element
console.log(myArr.indexOf(3));//returns the index of the specified element
const newArr=myArr.join();//joins the elements of the array into a string
console.log(typeof newArr);//returns the type of the newArr that is string
const newArr1=myArr.join('-');//joins the elements of the array into a string with a specified separator
console.log(newArr1);
const newArr2=myArr.slice(1, 4);//returns a new array with the specified elements from the original array
console.log(newArr2);   
const newArr3=myArr.splice(1, 2);//removes the specified elements from the original array and returns a new array with the removed elements
console.log(newArr3);
console.log(myArr);

