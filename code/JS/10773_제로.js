const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = [
//   "4",
//   "3",
//   "0",
//   "4",
//   "0"
// ]  //0
// let input = [
//   '10',
//   '1',
//   '3',
//   '5',
//   '4',
//   '0',
//   '0',
//   '7',
//   '0',
//   '0',
//   "6"
// ] //7

input.shift();

let arr = [];
let ret = "";

input.forEach(c => {
  switch (c) {
    case "0":
      arr.pop();
      break;
    default:
      arr.push(parseInt(c));
      break;
  }
})
console.log(arr.reduce((a, b) => {
  return a + b;
}, 0))
