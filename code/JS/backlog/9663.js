// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = [
  '8'
]

let cnt = 0;

let n = parseInt(input[0]);

let arr = new Array(new Array(n));

const fillArr = (row, col) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === row)
        arr[i][j] += 2;
      if (j === col)
        arr[i][j] += 2;
      if ()
    }
  }
}

const check = (row, col) => {
  if (arr[row][col] === 0) {
    arr[row][col] === 1;
    fillArr(row, col);
  }
}
