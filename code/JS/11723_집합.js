// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = ['26',
  'add 1',
  'add 2',
  'check 1',
  'check 2',
  'check 3',
  'remove 2',
  'check 1',
  'check 2',
  'toggle 3',
  'check 1',
  'check 2',
  'check 3',
  'check 4',
  'all',
  'check 10',
  'check 20',
  'toggle 10',
  'remove 20',
  'check 10',
  'check 20',
  'empty',
  'check 1',
  'toggle 1',
  'check 1',
  'toggle 1',
  'check 1']

input.shift();
input = input.map(a => {
  return a.split(' ');
})

let S = new Set();
let ret = ''

input.forEach(x => {
  switch (x[0]) {
    case 'add':
      S.add(parseInt(x[1]));
      break;
    case 'remove':
      S.delete(parseInt(x[1]));
      break;
    case 'check':
      ret += S.has(parseInt(x[1])) ? '1\n' : '0\n';
      break;
    case 'toggle':
      if (S.has(parseInt(x[1]))) {
        S.delete(parseInt(x[1]));
      }
      else {
        S.add(parseInt(x[1]));
      }
      break;
    case 'all':
      S = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
      break;
    case 'empty':
      S = new Set();
      break;
    default:
      break;
  }
})
console.log(ret.trim());
