const score = 100;
const bonus= new Number(20);//number of methods are visible in the console when u initialize like this

console.log(score + bonus);
console.log(bonus.toFixed(2));//formats the number to a string with a specified number of decimals
console.log(Math.random());//generates a random number between 0 and 1      
const othernumber=123.456789;
console.log(othernumber.toPrecision(3));//formats the number to a string with a specified number of significant digits


const hundreds=100000000;
console.log(hundreds.toLocaleString('en-IN'));//formats the number to a string with a language-sensitive representation...applies comma basically
//.............................................Math object.......................................................
console.log(Math.max(1, 2, 3, 4, 5));//returns the largest value
console.log(Math.min(1, 2, 3, 4, 5));//returns the smallest value
console.log(Math.round(5.5));//rounds the number to the nearest integer
console.log(Math.floor(5.9));//returns the largest integer less than or equal to the specified number
console.log(Math.ceil(5.1));//returns the smallest integer greater than or equal to the specified number
console.log(Math.PI);//returns the value of PI
console.log(Math.abs(-5));//returns the absolute value of a number basically -ve to +ve and +ve to +ve
console.log(Math.random());//returns a random number between 0 and 1
console.log((Math.random()*100)+1);//returns a random number between 1 and 100
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));//returns a random number between min and max