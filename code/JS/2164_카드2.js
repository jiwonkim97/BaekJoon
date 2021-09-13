// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['500000'];
let queue = [];

if (input[0] === '1') {
    console.log(1);
    return;
}

for (let i = 0; i < parseInt(input[0]); i++)
    queue[i] = i + 1;

while (queue.length > 1) {
    // console.log(queue)
    queue.shift();
    queue.push(queue.shift());
}

console.log(queue[0]);
