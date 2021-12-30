const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = ['6','(())())','(((()())()','(()())((()))','((()()(()))(((())))()','()()()()(()()())()','(()((())()(']  // NO NO YES NO YES NO
// let input = ['3','((','))','())(()'];   // NO NO NO

input.shift();
let ret = [];
for(let i = 0 ; i < input.length ; i ++){
    let cnt = 0;
    input[i].split('').forEach(c => {
        if(c === '(')
            cnt ++;
        else if(c===')'){
            if(cnt === 0)
                cnt -= 99999;
            cnt --;
        }
    })
    ret.push(cnt === 0 ? 'YES' : 'NO');
}

console.log(ret.join('\n'));