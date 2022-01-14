const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = ['33(562(71(9)))'];  //19
// let input = ['123']; //3
// let input = ['10342(76)'];  //8
// let input = ['0(0)'];  //0
// let input = ['1(1(1(1(1(1(1(0(1234567890))))))))'];  //0
// let input = ['1()66(5)'];  //7
// let input = ['22(2)22(2)22(2)'];

const unzip = (c) => {
  // console.log(c);
  let stack = [];
  for (let i = 0; i < c.length; i++) {
    if (c[i] === ')') {
      // console.log(stack);
      let arr = [];
      while (stack[stack.length - 1] !== '(') {
        arr.push(stack.pop());
      }
      stack.pop();  // '(' 빼주기
      // console.log('str: ' + str)
      stack.push(unzip(arr.reverse().join('')).repeat(stack.pop()));
    }
    else {
      stack.push(c[i]);
    }
  }
  return stack.join('');
};

// console.log(unzip(input[0]));
console.log(unzip(input[0]).length);
