const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['10', '6 3 2 10 10 10 -10 -10 7 3', '8', '10 9 -5 2 3 4 5 -10'];	// 3 0 0 1 2 0 0 2

let nums = input[1].split(' ').map(c => parseInt(c));
let find = input[3].split(' ').map(c => parseInt(c));
let dict = {};
nums.forEach(c => {
	dict[c] = dict[c] ? dict[c] + 1 : 1;
})

let ret = '';
find.forEach(c => {
	ret += dict[c] ? dict[c] + ' ' : '0 ';
})

console.log(ret.trim());
