// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = ['5 5', '1 2 3 4 5'];
// let input = ['3 13', '3 7 8'];

let [N, C] = input[0].split(' ').map(c => parseInt(c));

let w = input[1].split(' ').map(c => parseInt(c));

for (let i = 0; i < N; i++) {
  if (w[i] === C) {
    console.log(1);
    return;
  }
}
