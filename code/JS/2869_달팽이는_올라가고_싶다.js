const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const V = parseInt(input[2]);

console.log(Math.ceil((V-B) / (A-B)))