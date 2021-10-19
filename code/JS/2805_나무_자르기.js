// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = [
//   '4 7',
//   '20 15 10 17'
// ] // 15

let input = [
  '5 20',
  '4 42 40 26 46'
] // 36
let flag = true;
let M = parseInt(input[0].split(' ')[1]);
let trees = input[1].split(' ');
trees.sort((a, b) => a - b);
let len = trees.length;
let start = ~~(len / 2), end = trees.length - 1;
let H = 0;

while (flag) {
  let n = 0;
  len = ~~(len / 2);
  H = trees[~~(len / 2)];
  for (let i = start; i <= end; i++) {
    n += trees[i] - H;
  }
  console.log(start + '_' + end + '_' + H + '_' + n + '_' + M);

  if (n === M) {
    console.log(H);
    flag = false;
  }
  else if (n > M) {
    start = len + ~~(len / 2);
  }
  else {

  }
  if (len === 1)
    break;
}
