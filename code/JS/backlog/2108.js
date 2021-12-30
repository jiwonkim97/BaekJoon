// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = ['5', '1', '3', '8', '-2', '2'];	// 2 2 1 10
// let input = ['1', '4000'];	// 4000 4000 4000 0
// let input = ['5', '-1', '-2', '-3', '-1', '-2'];	// -2 -2 -1 2
let n = input.shift();
let dict = {};
input = input.map(c => parseInt(c)).sort((a, b) => a - b);
input.forEach(c => {
	dict[c] = dict[c] ? dict[c] + 1 : 1;
})
let ret = '';

ret += Math.round(input.reduce((a, c) => { return c + a }, 0) / n) + '\n';

ret += input[~~(n / 2)] + '\n';

ret += '최빈값' + '\n';

ret += input[n - 1] - input[0];
console.log(ret);
