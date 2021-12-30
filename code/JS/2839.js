// const fs = require('fs');
// let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]);
let input = 11

let five = Math.floor(input/5);
for(let i = five ; i >= 0 ; i --){
    if((input - i*5) % 3 === 0){
        console.log(i + (input - i * 5)/3);
        return 0 ;
    }
}
console.log(-1)