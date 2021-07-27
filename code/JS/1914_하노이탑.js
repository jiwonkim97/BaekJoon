const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const solution = (N) => {
    N=parseInt(N);
    let flag = false;
    if(N < 21)
        flag = true;

    console.log(Math.pow(2,N)-1);

    hanoi(N, 1, 3, 2, flag);
}
const hanoi = (N, s, e, v, flag) => {
    if(N === 1)
        move(s,e, flag);
    else{
        hanoi(N-1,s,v,e, flag);
        move(s,e,flag);
        hanoi(N-1,v,e,s, flag);
    }
}
const move = (s,e, flag) =>{
    if(flag)
        console.log(s+' '+e);
}

solution(input());