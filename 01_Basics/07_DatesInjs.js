let myDate= new Date();//Date is an object here and we are creating an instance of it using the new keyword. It returns the current date and time.
console.log(myDate);//returns the current date and time
console.log(myDate.getFullYear());//returns the current year
console.log(myDate.getMonth());//returns the current month (0-11)
console.log(myDate.getDate());//returns the current date of the month (1-31)
console.log(myDate.getDay());//returns the current day of the week (0-6)
console.log(myDate.toString());//returns the date as a string
console.log(myDate.toDateString());//returns the date as a string without the time
console.log(myDate.toLocaleDateString());//returns the date as a string in the local format
let myDate1= new Date(2020, 11, 25);//Date is an object here and we are creating an instance of it using the new keyword. It returns the date and time for the specified date.
console.log(myDate1);//returns the date and time for the specified date
//Month and Day are zero based in js so 11 is December and 25 is the date of the month.\
let myTimeStamp=Date.now();//returns the number of milliseconds since January 1, 1970
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));//returns the number of seconds since January 1, 1970
 
