//Reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers=[1, 2, 3, 4, 5];
const sum=numbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0)//Here we are using reduce method to iterate over an array and log the sum of all the elements to the console. It returns a single output value which is the sum of all the elements in the array.
console.log(sum);//15 - it returns a single output value which is the sum of all the elements in the array.
//Current Value=The current element being processed in the array. It is the second argument passed to the callback function of the reduce method. It is used to access the current element being processed in the array.
//Accumulator=The accumulator accumulates the callback's return values. It is the first argument passed to the callback function of the reduce method. It is used to accumulate the callback's return values. It is used to access the accumulated value returned by the callback function of the reduce method. 
//Basically accumulator stores the temporary result of the reduce method and is used to accumulate the callback's return values. It is used to access the accumulated value returned by the callback function of the reduce method.
const shoppingCart=[{
    item: "Laptop",
    price: 1000,
    quantity: 1
}, {
    item: "Mouse",
    price: 25,
    quantity: 2
}];
const totalPrice=shoppingCart.reduce((accumulator,currentValue)=>accumulator+currentValue.price*currentValue.item,0)//Here we are using reduce method to iterate over an array of objects and log the total price of all the items in the shopping cart to the console. It returns a single output value which is the total price of all the items in the shopping cart.
console.log(totalPrice);//1050 - it returns a single output value which is the total price of all the items in the shopping cart.