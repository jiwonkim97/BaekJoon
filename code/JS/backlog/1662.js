// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

let input = ['33(562(71(9)))'];  //19
// let input = ['123']; //3
// let input = ['10342(76)'];  //8
// let input = ['0(0)'];  //0
// let input = ['1(1(1(1(1(1(1(0(1234567890))))))))'];  //0
// let input = ['1()66(5)'];  //7
// let input = ['22(2)22(2)22(2)'];
// let input = ['2(3)4'];

const unzip = (c) => {
  console.log(c);
  let stack = [];
  let ret = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === ')') {
      // console.log(stack);
      let arr = [];
      let cnt = 0;
      while (stack[stack.length - 1] !== '(') {
        arr.push(stack.pop());
      }
      stack.pop();  // '(' 빼주기
      let temp = stack.pop();
      while (stack.length) {
        stack.pop();
        cnt++;
      }
      // console.log('str: ' + str)
      // stack.push(unzip(arr.reverse().join('')).repeat(stack.pop()));
      ret = cnt + temp * unzip(arr.reverse().join(''));
    }
    else {
      stack.push(c[i]);
    }
  }
  return ret ? ret : stack.length;
};

// console.log(unzip(input[0]));
console.log(unzip(input[0]));
