const marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];
const dcheroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];
// marvelHeroes.push(dcheroes); //adds the dcheroes array as a single element to the end of the marvelHeroes array
// console.log(marvelHeroes); //logs the updated marvelHeroes array with dcheroes as a single element(AS AN ARRAY) at the end of it

console.log(marvelHeroes.concat(dcheroes)); //returns a new array with the elements of both arrays
console.log(marvelHeroes);//All the elements of the marvelHeroes array are still there as it is because concat() method does not change the original array but returns a new array with the elements of both arrays
const allheroes=[...marvelHeroes, ...dcheroes];//spread operator(...) is used to spread the elements of the arrays into a new array
console.log(allheroes);//logs the new array with the elements of both arrays


//if arrays are inside an array then we can use the flat() method to flatten the array and get a new array with all the elements of the nested arrays
const nestedArr=[1, 2, [3, 4], [5, 6]];
console.log(nestedArr.flat());//returns a new array with all the elements of the nested arrays

console.log(Array.isArray(marvelHeroes));//returns true if the specified variable is an array
///////////////////////////////////////////////////
console.log(Array.from('Hello'));//returns a new array from the specified string
///////////////////////////////////////////////////