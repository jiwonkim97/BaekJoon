const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = ['1','3']
const a = parseInt(input[0]);
const b = parseInt(input[1]);
let ret = '';

if(b <= 1)
    return;

let arr = new Array(b+1).fill(true);
arr[0] = false;
arr[1] = false;

for(let i = 2 ; i <= b ; i ++){
    if(arr[i]){
        for(let j = i * i ; j <= b ; j+=i )
            arr[j] = false;
    }
}

for(let i = a ; i <= b ; i ++){
    if(arr[i])
        ret += i + '\n'
}
console.log(ret.trim());