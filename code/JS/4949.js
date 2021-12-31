const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// let input = [
//   'So when I die(the[first] I will see in (heaven) is a score list).',
//   '[first in ](first out).',
//   'Half Moon tonight(At least it is better than no Moon at all].',
//   'A rope may form ) (a trail in a maze.',
//   'Help(I[m being held prisoner in a fortune cookie factory)].',
//   '([(([([])()(( ))]))]).',
//   ' .',
//   '.'
// ];  // yes yes no no no yes yes

let ans = '';
input.pop();

const check = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        stack.push(str[i]);
        break;
      case '{':
        stack.push(str[i]);
        break;
      case '[':
        stack.push(str[i]);
        break;
      case ')':
        if (stack[stack.length - 1] === '(')
          stack.pop();
        else
          return false;
        break;
      case '}':
        if (stack[stack.length - 1] === '{')
          stack.pop();
        else
          return false;
        break;
      case ']':
        if (stack[stack.length - 1] === '[')
          stack.pop();
        else
          return false;
        break;
    }
  }

  return stack.length ? false : true;
}

input.forEach(c => {
  ans += check(c) ? '\nyes' : '\nno';
});



console.log(ans.trim());
