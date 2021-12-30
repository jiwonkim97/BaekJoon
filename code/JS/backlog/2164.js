// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['500000'];
let queue = [];
let len = parseInt(input[0]);

if (input[0] === '1') {
    console.log(1);
    return;
}

for (let i = 0; i < len; i++)
    queue[i] = i + 1;

while (len > 1) {
    // console.log(queue)
    queue.push(queue[1]);
    queue = queue.slice(2, len + 1);
    len--;
}

console.log(queue[0]);
