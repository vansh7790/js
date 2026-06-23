console.log(2>1)//true
console.log(2<1)//false
console.log("2" > 1);//true
console.log("2" < 1);//false
console.log("2" > "12");//true as it lexologically compares the first character of both strings and "2" is greater than "1"
console.log("2" < "12");//false as it lexologically compares the first character of both strings and "2" is greater than "1"
console.log(null>0)//false as > does not convert null to 0 and null is considered less than any number
console.log(null<0)//false as < does not convert null to 0 and null is considered less than any number
console.log(null==0)//false
console.log(null>=0)//true as null is converted to 0 and 0>=0 is true
//=== and !=== are strict equality and inequality operators that check for both value and type equality/inequality. They do not perform type coercion. For example, 1 === "1" is false because the types are different (number vs string). Similarly, 1 !== "1" is true because the types are different.