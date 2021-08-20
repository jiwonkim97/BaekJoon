const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['8', '4', '3', '6', '8', '7', '5', '2', '1'];
// let input = ['5', '1', '2', '5', '3', '4']
input.shift();
input = input.map(c => parseInt(c));
let stack = [];
let idx = 0;

let ret = '';

for (let i = 0; i < input.length; i++) {
	let c = input[i];
	if (idx < c) {
		while (c > idx) {
			stack.push(++idx);
			ret += '+\n';
		}
		stack.pop();
		ret += '-\n';
	}
	else if (c === stack[stack.length - 1]) {
		stack.pop();
		ret += '-\n';
	}
	else {
		console.log('NO');
		return;
	}
}

console.log(ret.trim())
