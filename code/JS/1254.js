const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['abab'];
// let input = ['abacaba'];
// let input = ['qwerty'];
// let input = ['abdfhdyrbdbsdfghjkllkjhgfds'];

let str = input[0];

const isPalindrome = (str) => {
  let len = str.length;
  let a = str.substring(0, ~~len / 2);
  let b = len % 2 ? str.substring(~~len / 2 + 1, len) : str.substring(~~len / 2, len);
  b = b.split('').reverse().join('');
  return a === b;
}

if (isPalindrome(str)) {
  console.log(str.length);
  return;
}

for (let i = 0; i < str.length - 1; i++) {
  let s = str;

  s += s.substring(0, i + 1).split('').reverse().join('');

  if (isPalindrome(s)) {
    console.log(s.length);
    return;
  }
}
