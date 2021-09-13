const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['15',
//   'push_back 1',
//   'push_front 2',
//   'front',
//   'back',
//   'size',
//   'empty',
//   'pop_front',
//   'pop_back',
//   'pop_front',
//   'size',
//   'empty',
//   'pop_back',
//   'push_front 3',
//   'empty',
//   'front'
// ]	// 2 1 2 0 2 1 -1 0 1 -1 0 3

// let input = [
//   `22`,
//   `front`,
//   `back`,
//   `pop_front`,
//   `pop_back`,
//   `push_front 1`,
//   `front`,
//   `pop_back`,
//   `push_back 2`,
//   `back`,
//   `pop_front`,
//   `push_front 10`,
//   `push_front 333`,
//   `front`,
//   `back`,
//   `pop_back`,
//   `pop_back`,
//   `push_back 20`,
//   `push_back 1234`,
//   `front`,
//   `back`,
//   `pop_back`,
//   `pop_back`
// ] // -1 -1 -1 -1 1 1 2 2 333 10 10 333 20 1234 1234 20

const push_front = (x) => {
  deque.unshift(x);
}

const push_back = (x) => {
  deque.push(x);
}

const pop_front = () => {
  ret += deque.length ? deque.shift() + '\n' : '-1\n';
}

const pop_back = () => {
  ret += deque.length ? deque.pop() + '\n' : '-1\n';
}

const size = () => {
  ret += deque.length + '\n';
}

const empty = () => {
  ret += deque.length ? '0\n' : '1\n';
}

const front = () => {
  ret += deque.length ? deque[0] + '\n' : '-1\n';
}

const back = () => {
  ret += deque.length ? deque[deque.length - 1] + '\n' : '-1\n';
}

let ret = '';
let deque = [];
input.shift();

input = input.map(c => c.split(' '))

input.forEach(c => {
  switch (c[0]) {
    case 'push_front':
      push_front(parseInt(c[1]));
      break;
    case 'push_back':
      push_back(parseInt(c[1]));
      break;
    case 'pop_front':
      pop_front();
      break;
    case 'pop_back':
      pop_back();
      break;
    case 'size':
      size();
      break;
    case 'empty':
      empty();
      break;
    case 'front':
      front();
      break;
    case 'back':
      back();
      break;
  }
})
console.log(ret.trim());
