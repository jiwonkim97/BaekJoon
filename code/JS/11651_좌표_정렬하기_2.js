const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['5', '0 4', '2 2', '1 2', '1 -1', '3 3', '0 0'];
input.shift();
input = input.map(c => c.split(' ').map(d => parseInt(d)));

input.sort((a, b) => {
  if (a[1] !== b[1])
    return (a[1] - b[1])
  else
    return (a[0] - b[0])
});

let ret = '';
input.forEach(c => {
  ret += c.join(' ')
  ret += '\n';
})

console.log(ret.trim())
