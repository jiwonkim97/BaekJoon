const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(c=>parseInt(c));

// let input = ['7', '12', '53', '5', '4', '3', '2', '1', '521', '1235'];
input.shift();

input.sort((a,b) => a-b);
console.log(input.join('\n'));

// function quickSort(array) {
// 	if (array.length < 2) {
// 		return array;
// 	}
// 	const pivot = [array[0]];
// 	const left = [];
// 	const right = [];
// 	for (let i = 1; i < array.length; i++) {
// 		if (array[i] < pivot) {
// 			left.push(array[i]);
// 		}
// 		else if (array[i] > pivot) {
// 			right.push(array[i]);
// 		}
// 		else {
// 			pivot.push(array[i]);
// 		}
// 	}
// 	return quickSort(left).concat(pivot, quickSort(right));
// }

// console.log(quickSort(input).join('\n'));