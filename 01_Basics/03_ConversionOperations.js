let score = "33" //String
console.log(typeof score)
let valueInNumber=Number(score) //Converting string to number
console.log(typeof valueInNumber)
//{"33" is converted to 33
//"33abc" is converted to NaN(Not a Number)
//true is converted to 1
//false is converted to 0} all when converted to number

  //Operations.....................................................//
  let value=3
  let negvalue=-value //negating the value
  console.log(negvalue)
  let str="Hello"
  let str2="World"
  let str3=str+str2 //Concatenation of strings
  console.log(str3) 
  console.log("1"+1)//1 is converted to string and concatenated with "1" to give "11"
  console.log(1+"1")//1 is converted to string and concatenated with "1" to give "11"
  console.log(1+1+"1")//1+1=2 and then 2 is converted to string and concatenated with "1" to give "21"
  console.log("1"+1+1)//1 is converted to string and concatenated with "1" to give "111" 
