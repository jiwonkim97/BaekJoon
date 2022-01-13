const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const cardNum = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);
let arr = input[1].split(' ');
arr = arr.map(c => parseInt(c)).sort((a, b) => { return a - b })
let ret = 0;

// const cardNum = 5;
// const M = 21;
// let arr = ['5','6','7','8','9'];
// let ret = 0;
// arr = arr.map(c => parseInt(c)).sort((a,b) => {return a-b})

for (let i = 0; i < cardNum - 2; i++) {
    if (arr[i] > M)
        break;
    for (let j = i + 1; j < cardNum - 1; j++) {
        if (arr[i] + arr[j] > M)
            break;
        for (let k = j + 1; k < cardNum; k++) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum > M)
                break;
            if (sum > ret)
                ret = arr[i] + arr[j] + arr[k];
        }
    }
}
console.log(ret);
