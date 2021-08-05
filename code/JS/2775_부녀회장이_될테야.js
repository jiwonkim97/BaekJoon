const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
// let input = ['2','1','3','2','3']
input = input.map(c=>parseInt(c));
let arr = [];

const calc = (k,n) => {
    if(k === 0)
        return n;
    else{
        let ret = 0;
        for(let i = 1 ; i <= n ; i ++)
            ret += calc(k-1,i);
        return ret
    }
}

for(let i = 0 ; i < input[0] ; i ++)
    console.log(calc(input[2*i + 1],input[2*i + 2]))