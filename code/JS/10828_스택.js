const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['14','push 1', 'push 2', 'top','size','empty','pop','pop','pop','size','empty','pop','push 3','empty','top']
// let input = ['7','pop','top','push 123','top','pop','top','pop']
let stack = [];
input[0] = '_';
let ret = '';
const _push = (num) =>{
    stack[stack.length] = num;
};

const _pop = () => {
    let len = stack.length;
    if(!len){
        ret += '-1\n'
    }else{
        ret += stack[len-1]+'\n';
        stack.length=len-1;
    }
};

const _size = () => {
    ret += stack.length+'\n';
};

const _empty = () => {
    ret += stack.length ? '0\n' : '1\n';
};

const _top = () => {
    let len = stack.length;
    if(!len){
        ret += '-1\n';
    }else
        ret += stack[len-1]+'\n';
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
        case 'top':
            _top();
            break;
        case '_':
            break;
        default:
            _push(parseInt(c.split(' ')[1]));
            break;
    }
})

console.log(ret.trim());