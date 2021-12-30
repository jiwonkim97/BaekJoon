const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['3 5', '42101', '22100', '22101'];
// let input = ['2 2', '12', '34'];
// let input = ['2 4', '1255', '3455'];
// let input = ['1 10', '1234567890'];
// let input = ['11 10', '9785409507', '2055103694', '0861396761', '3073207669', '1233049493', '2300248968', '9769239548', '7984130001', '1670020095', '8894239889', '4053971072'];

let [N, M] = input[0].split(' ').map(c => parseInt(c));
let len = Math.min(N, M);
input.shift();

let arr = input.map(c => {
  return c.split('').map(d => parseInt(d));
})

for (; len > 1; len--) {
  for (let n = 0; n <= N - len; n++) {
    for (let m = 0; m <= M - len; m++) {
      // console.log(len + '_' + n + '_' + m);
      let num = arr[n][m];
      // console.log('num : ' + num);
      if (num === arr[n + len - 1][m]
        && num === arr[n][m + len - 1]
        && num === arr[n + len - 1][m + len - 1]) {
        // console.log(n + '_' + m + '_' + num);
        // console.log(arr[n + len - 1][m]);
        // console.log(arr[n][m + len - 1]);
        // console.log(arr[n + len - 1][m + len - 1]);
        // console.log(len);
        console.log(len * len);
        return;
      }
    }
  }
}
console.log(1);
