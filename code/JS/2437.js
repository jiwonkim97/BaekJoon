const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = [
//   '7',
//   '3 1 6 2 7 30 1'
// ];

let N = input.shift();
let weight = input[0].split(' ').map(c => parseInt(c));

weight.sort((a, b) => {
  return b - a;
});

for (let i = 0; i < 1000000 * N; i++){
  let target = i;

  for (let j = 0; j < weight.length; j++){
    if (target >= weight[j]) {
      target -= weight[j];
    }
    if (target <= 0)
      break;
  }

  if (target !== 0) {
    console.log(i);
    return;
  }
}
