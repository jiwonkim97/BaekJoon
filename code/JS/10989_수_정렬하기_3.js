const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['10', '5', '2', '3', '1', '4', '2', '3', '5', '1', '7'];
input.shift();
input = input.map(c => parseInt(c));

input.sort((a, b) => a - b);
console.log(input.join('\n'))


// JS로는 풀 수 없는 문제라고 함
