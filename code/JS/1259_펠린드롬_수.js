// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['76767','12621','1259','1241', '12421', '1','0']
// input = input.map(c=>parseInt(c).toString())

// for(let i = 0 ; i < input.length - 1 ; i ++){
//     let a = input[i].split('');
//     let b = input[i].split('').reverse();
//     let ret = 'yes';
//     for(let j = 0 ; j < input[i].length/2 ; j ++){
//         if(a.pop() !== b.pop()){
//             ret = 'no'
//             break;
//         }
//     }
//     console.log(ret);
// }
input.pop()
for(let i = 0 ; i < input.length ; i ++){
    // if(input[i].length === 1){
    //     console.log('yes');
    //     continue;
    // }
    // let a = input[i].substr(0,Math.floor(input[i].length/2));
    // let b = input[i].substr(Math.ceil(input[i].length/2),Math.floor(input[i].length)).split('').reverse().join('');
    // a === b ? console.log('yes') : console.log('no');
    let a = input[i].split('').reverse().join('');
    a === input[i] ? console.log('yes') : console.log('no')
}