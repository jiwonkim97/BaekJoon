const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const N = parseInt(input[0]);
const K = parseInt(input[1]);
const facto = (n) => {
    if(n === 1 || n===0)
        return 1;
    else 
        return n * facto(n-1);
}
console.log(facto(N) / (facto(N-K) * facto(K)));