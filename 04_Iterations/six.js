//For each loop doesn't return anything 


//Filter method returns a new array with all the elements that pass the test implemented by the provided function. It does not change the original array, it just creates a new array with the filtered elements.

myArray = [1, 2, 3, 4, 5,6,7,8,9,10];
const newNums=myArray.filter( (num)=> num>4)
console.log(newNums);//[5, 6, 7, 8, 9, 10] - it returns a new array with all the elements that pass the test implemented by the provided function. In this case, it returns a new array with all the elements that are greater than 4.



//Explicit return=when using cury braces, we need to use the return statement to return a value from the function. If we don't use the return statement, the function will return undefined.
const newNums2=myArray.filter( (num)=>{
    return num>4
})

console.log(newNums2);//[5, 6, 7, 8, 9, 10] - it returns a new array with all the elements that pass the test implemented by the provided function. In this case, it returns a new array with all the elements that are greater than 4.



//Using for each loop to filter an array
const newNums3=[];
myArray.forEach((num)=>{
    if(num>4) newNums3.push(num)
})
console.log(newNums3);

