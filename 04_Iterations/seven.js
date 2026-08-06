const numbers=[1, 2, 3, 4, 5];
//Map method returns a new array with the results of calling a provided function on every element in the calling array. It does not change the original array, it just creates a new array with the results of calling a provided function on every element in the calling array.
const newnums=numbers.map((num)=>num*2)//Here we are using map method to iterate over an array and log the double of each element to the console. It returns a new array with the double of each element.
console.log(newnums);//[2, 4, 6, 8, 10] - it returns a new array with the results of calling a provided function on every element in the calling array. In this case, it returns a new array with the double of each element.



//Chaining=Using map and filter methods together to create a new array with the results of calling a provided function on every element in the calling array and then filtering the new array and returning a new array with all the elements that pass the test implemented by the provided function.
const newnums2=numbers
               .map((num)=>num*2)
               .filter((num)=>num>5)//Here we are using map method to iterate over an array and log the double of each element to the console. It returns a new array with the double of each element. Then we are using filter method to filter the new array and return a new array with all the elements that are greater than 5.
console.log(newnums2);//[6, 8, 10] - it returns a new array with the results of calling a provided function on every element in the calling array. In this case, it returns a new array with the double of each element and then filters the new array and returns a new array with all the elements that are greater than 5.
