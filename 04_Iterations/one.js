//For loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//For with break

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    } 
    console.log(i);
}//Here the loop will terminate when i is equal to 3, so the output will be 0, 1, 2

//For with continue

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }   
    console.log(i);
}//Here the loop will skip the iteration when i is equal to 3, so the output will be 0, 1, 2, 4


//Nested for loop

for (let i = 0; i < 3; i++) {   
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }       
}//This will output all combinations of i and j from 0 to 2, resulting in a total of 9 iterations.
