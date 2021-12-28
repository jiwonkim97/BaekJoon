// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = ['3 4 2', '1 3', '1 2', '2 3', '3 6'];

let [n, m, k] = input[0].split(' ');
input.shift();
let quest = input.map(c => c.split(' ').map(d => parseInt(d)));
