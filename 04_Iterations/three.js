const arr=[1, 2, 3, 4, 5];

for(const num of arr){
    console.log(num);
}
const greetings = ['Hello', 'Hi', 'Hey', 'Hola', 'Bonjour'];

for(const greeting of greetings){
    console.log(greeting);
}

///Maps=Unique Values, maintains the orders in which they are entered.Map is an iterable object, so we can use for of loop to iterate over its entries.
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
for(const [key, value] of map){
    console.log(key, ':', value);
}

console.log(map);

//Object
const obj = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};
for(const [key, value] of Object.entries(obj)){//if you dont use object.entries, it will give you an error because object is not iterable.
    console.log(key, ':', value);
}


