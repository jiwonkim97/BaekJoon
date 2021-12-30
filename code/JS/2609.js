const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = ['24','18']     //6,72
input = input.map(c=>parseInt(c));

const GCD = (a,b) => {
    return !(a % b) ? b : GCD(b, a % b);
}

let gcd = GCD(...input)
console.log(gcd);
console.log(input.reduce((a,b) => {return a * b}, 1) / gcd)