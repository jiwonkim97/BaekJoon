// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')[1].split('');
let input=['a','a','a','a','a','a','a','a','a','a','a','a','a']
const M = 1234567891;
let R = 1;
// input = input.map((c, i)=>parseInt(c.charCodeAt()-96) * Math.pow(31,i))
// console.log(input.map((c, i)=>parseInt((c.charCodeAt()-96) * Math.pow(31,i)) % M).reduce((a,b) => a += b) % M);
input = input.map((c, i)=>parseInt((c.charCodeAt()-96)));
for(let i = 0 ; i < input.length ; i ++){
    input[i] = (input[i] * R) % M;
    R = (R * 31) % M
}
console.log(input.reduce((a,b) => a+=b)%M)
// for(let i = 0 ; i < input.length ; i ++){console.log(input[i].charCodeAt()-96)}
// console.log(input)
