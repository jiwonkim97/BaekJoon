const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = [13];   //3
// let input = [58]; //5

let arr = [1];
let sum = 1;
let N = parseInt(input[0]);
for(let i = 1 ; ; i++){
    if(sum >= N)
    break;

    arr.push(6 * i);
    sum += 6 * i;
}

console.log(arr.length)