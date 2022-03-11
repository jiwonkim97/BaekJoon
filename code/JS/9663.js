const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['14']
const N = parseInt(input[0])

let board = [];
let cnt = 0;
for (let i = 0; i < N; i++){
  board.push(false)
}


function Queen(idx) {
  if (idx === N) {
    cnt += 1
    return
  }

  for (let i = 0; i < N; i++) {
    if (board.includes(i)) {
      continue
    }

    if (check(idx, i)) {
      board[idx] = i
      Queen(idx + 1)
      board[idx] = -1
    }
  }
}

function check(x,y){
  for (let i = 0; i < x; i ++){
    if (Math.abs(i-x) == Math.abs(board[i] - y)){
      return false
    }
  }
  return true
}

Queen(0)
console.log(cnt)
