const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = ['5', '4 1 5 2 3', '5', '1 3 7 9 5']
let A = input[1].split(' ').map(c => parseInt(c));
let B = input[3].split(' ').map(c => parseInt(c));

let dict = {};
let ret = '';
A.forEach(c => {
    if (!dict[c])
        dict[c] = 1;
})
B.forEach(c => {
    ret += dict[c] ? '1\n' : '0\n';
})

console.log(ret.trim());
// let ret = '';
// A = A.sort((a, b) => a - b);

// const find = (num, arr, len) => {
//     let Arr = [...arr];
//     // console.log('arr : ' + arr)
//     // console.log('len : ' + len)
//     if (len === 0)
//         return false;

//     let center = Math.floor(len / 2);
//     let flag = true;

//     while (flag) {
//         // console.log('arr : ' + Arr)
//         // console.log('len : ' + center)
//         let k = Arr[center]

//         if (k === num) {
//             flag = true;
//             return true;
//         } else if (k < num) {
//             Arr = Arr.splice(center + 1, len + 1)
//             center = Math.floor(center / 2);
//         }
//         else {
//             Arr = Arr.splice(0, center + 1)
//             center = Math.floor(center / 2);
//         }
//         if (center === 0) {
//             return false;
//         }
//     }

// }
// B.forEach(c => {
//     ret += (find(c, A, parseInt(input[0])) ? '1\n' : '0\n');
// })

// console.log(ret.trim())
