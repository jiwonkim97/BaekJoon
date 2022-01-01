const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = [
//   '1000 100'
// ];

let [n, m] = input[0].split(' ').map(c => BigInt(c));

console.log(~~(n / m) + '\n' + n % m);
