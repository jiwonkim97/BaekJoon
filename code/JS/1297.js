const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = [
//   '52 9 16'
// ]   // 25 45

// let input = [
//   '7 2 3'
// ]  // 3 5

// let input = [
//   '13 7 10'
// ]  // 7 10

// let input = [
//   '7 32 47'
// ]  // 3 5

// let input = [
//   '11 15 16'
// ]  // 7 8

let [D, H, W] = input[0].split(' ').map(c => parseInt(c));

let a = Math.sqrt(D * D / (H * H + W * W));

console.log(~~(a * H) + ' ' + ~~(a * W));
