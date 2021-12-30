// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = [
  '3 4 99',
  '0 0 0 0',
  '0 0 0 0',
  '0 0 0 1'
] //2 0

// let input = [
//   '3 4 1',
//   '64 64 64 64',
//   '64 64 64 64',
//   '64 64 64 63'
// ] //1 64

// let input = [
//   '3 4 0',
//   '64 64 64 64',
//   '64 64 64 64',
//   '64 64 64 63'
// ] //22 63

let [N, M, B] = input[0].split(' ');
console.log(N);
console.log(M);
console.log(B);
