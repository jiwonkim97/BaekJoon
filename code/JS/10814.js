const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = ['3', '21 Junkyu','21 Dohyun','20 Sunyoung'];
let ret = '';
input.shift();

input = input.map(c=>{
    let temp = c.split(' ');
    return [parseInt(temp[0]), temp[1]];
}).sort((a,b) => {
    return a[0]-b[0];
}).map(c=>{
    ret += c.join(' ') + '\n';
})

console.log(ret.trim());