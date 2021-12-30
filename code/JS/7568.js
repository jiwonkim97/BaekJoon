const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.


// let input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155'];

let N = input.shift();

let arr = input.map(c => c.split(' ').map(d => parseInt(d)));
let score = [];

for (let i = 0; i < N; i++) {
  let s = 0;
  for (let j = 0; j < N; j++) {
    if (i === j)
      continue;

    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1])
      s++;
  }
  score.push(s + 1);
}

console.log(score.join(' '));
