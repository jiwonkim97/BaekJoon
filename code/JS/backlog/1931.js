// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = ['11', '1 4', '3 5', '0 6', '5 7', '3 8', '5 9', '6 10', '8 11', '8 12', '2 13', '12 14'];
let N = input.shift();
input = input.map(c => c.split(' ').map(d => parseInt(d)));

console.log(input);
