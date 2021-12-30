const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = ['15','push 1','push 2','front','back','size','empty','pop','pop','pop','size','empty','pop','push 3','empty','front'];

let queue = [];
input[0] = '_';
let ret = '';

const _push = (num) =>{
    queue[queue.length] = num;
};

const _pop = () => {
    let len = queue.length;
    if(!len){
        ret += '-1\n'
    }else{
        ret += queue[0] + '\n';
        queue.shift();
    }
};

const _size = () => {
    ret += queue.length+'\n';
};

const _empty = () => {
    ret += queue.length ? '0\n' : '1\n';
};

const _front = () => {
    if(!queue.length)
        ret += '-1\n';
    else   
        ret += queue[0] + '\n';
};

const _back = () => {
    if(!queue.length)
        ret += '-1\n';
    else   
        ret += queue[queue.length - 1] + '\n';
};

input.forEach(c=> {
    switch(c){
        case 'pop':
            _pop();
            break;
        case 'size':
            _size();
            break;
        case 'empty':
            _empty();
            break;
        case 'front':
            _front();
            break;
        case 'back':
            _back();
            break;
        case '_':
            break;
        default:
            _push(parseInt(c.split(' ')[1]));
            break;
    }
})

console.log(ret.trim());