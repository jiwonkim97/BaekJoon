const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = [
//     '13',
//     'but',
//     'i',
//     'wont',
//     'hesitate',
//     'no',
//     'more',
//     'no',
//     'more',
//     'it',
//     'cannot',
//     'wait',
//     'im',
//     'yours'
// ]

input.shift();
input = [...new Set([...input])];
console.log(input.sort().sort((a,b) => {return a.length-b.length}).join('\n'))