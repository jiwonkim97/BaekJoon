// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = ['1','1000000']
const a = parseInt(input[0]);
const b = parseInt(input[1]);
let arr = [b].fill(0);

for(let i = a ; i < b ; i ++){
    
}
// let ret = '';
// const isPrime = (num) => {
//     if(num === 0 || num === 1)
//         return false;
//     if(num === 2 || num === 3)
//         return true;
//     for(let i = 2 ; i <= num / 2 ; i ++){
//         if(num % i === 0)
//             return false;
//     }
//     return true;
// }

// for(let i = parseInt(input[0]) ; i <= parseInt(input[1]) ; i++){
//     if(isPrime(i))
//         ret += i+'\n';
// }
// console.log(ret)