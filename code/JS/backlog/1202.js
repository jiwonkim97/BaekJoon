// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = [
//   '2 1',
//   '5 10',
//   '100 100',
//   '11'
// ];  //10
let input = [
  '5 2',
  '1 65',
  '3 65',
  '2 65',
  '5 23',
  '2 99',
  '10',
  '2'
]; //164

// let [N, K] = input.shift().split(' ').map(c => parseInt(c));
// let M = input.splice(0, N).map(c => c.split(' ').map(d => parseInt(d)));
// let C = input.splice(0, K).map(c => parseInt(c));
// let price = 0;

// M.sort(([a, b], [c, d]) => {
//   return b === d ? a - c : d - b;
// });

// C.sort((a, b) => { return a - b; });

// C.forEach(c => {
//   for (let i = 0; i < N; i++){
//     if (M[i][0] < c) {
//       price += M[i][1];
//       M[i][0] = 100000001;
//       return;
//     }
//   }
// })

// console.log(N)
// console.log(K)
// console.log(M)
// console.log(C)
// console.log(price)

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => ~~((childIndex - 1) / 2);

  peek = () => this.heap[0];
}
