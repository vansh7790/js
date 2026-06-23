const accountID=144553
let accountEmail="user@example.com"
var accountPassword="123456"/*Prefer not use var as it has function scope and can lead to unexpected behavior. Use let or const instead.*/
accountCity="New York"

// accountID=144554  //Error: Assignment to constant variable.
console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity])