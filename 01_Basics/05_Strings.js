const name="John Doe"//String
const repocount=50//Number
const modern=new String("Modern JavaScript")//String
// console.log(name + repocount+"Value"); //Concatenation of string and number (Outdated way of concatenation)
console.log(`Hello my name is ${name} and i have ${repocount} repositories`); //Concatenation of string and number (Modern way of concatenation using template literals)
// different string methods
console.log(name.length);//length of the string
console.log(name.toUpperCase());//converts the string to uppercase
console.log(name.toLowerCase());//converts the string to lowercase
console.log(name.charAt(0));//returns the character at the specified index
console.log(name.indexOf("Doe"));//returns the index of the first occurrence of the specified value
console.log(name.includes("John"));//returns true if the string includes the specified value
console.log(name.startsWith("John"));//returns true if the string starts with the specified value
console.log(name.endsWith("Doe"));//returns true if the string ends with the specified value
//String interpolation using template literals