const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['10000'];
let i = 665;
let count = 0;
const apo = /6{3}/;

while (true) {
	if (apo.test(++i)) {
		count++;
		if (parseInt(input[0]) === count)
			break;
	}
}

console.log(i);
