const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = ['4', '1 3 5 7'];

let nums = input[1].split(' ').map(c=>parseInt(c));

let arr = new Array(1001).fill(true);
arr[0] = false;
arr[1] = false;

for(let i = 2 ; i < 1001 ; i ++){
    if(arr[i]){
        for(let j = i * i ; j <= 1001 ; j+=i )
            arr[j] = false;
    }
}

console.log(nums.reduce((a,b) => {
    return arr[b] ? a+=1 : a;
}, 0));