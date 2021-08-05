const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
input = parseInt(input);
// let input = 999999;

for(let i = 0 ; i < input ; i ++){
    let ret = i;
    for(let j = 0 ; j < i.toString().length ; j ++){
        ret += parseInt(i.toString()[j]);
    }
    if(ret === input){
        console.log(i)
        return i;
    }
}
console.log (0);
return 0;