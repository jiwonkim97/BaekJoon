const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = ['5','3 4','1 1','1 -1', '2 2','3 3','2 1','-10 -1','-8 -4', '-8 -5', '10 10'];
let ret = '';
input.shift();
input = input.map(c=>{
    return c.split(' ').map(c => parseInt(c));
}).sort((a,b) => {
    if(a[0] === b[0])
        return a[1]-b[1];
    else
        return a[0]-b[0];
}).map(c=> {
    ret += c.join(' ') + '\n';
})

console.log(ret.trim())