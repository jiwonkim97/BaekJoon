const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const isPrime = (num) => {
    if(num === 0 || num === 1)
        return false;
    if(num === 2 || num === 3)
        return true;

    for(let i = 2 ; i < num ; i ++){
        if(num % i === 0)
            return false;
    }
    return true;
}

for(let i = parseInt(input[0]) ; i <= parseInt(input[1]) ; i++){
    if(isPrime(i))
        console.log(i);
}