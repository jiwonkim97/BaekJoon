const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // input은 줄 단위로 끊어진 배열로 저장 및 string임.

// const input = ['20'];

// const solution = (N) => {
//     N = parseInt(N);
//     let flag = false;
//     if (N < 21)
//         flag = true;

//     console.log(Math.pow(2, N) - 1);

//     hanoi(N, 1, 3, 2, flag);
// }
// const hanoi = (N, s, e, v, flag) => {
//     if (N === 1)
//         move(s, e, flag);
//     else {
//         hanoi(N - 1, s, v, e, flag);
//         move(s, e, flag);
//         hanoi(N - 1, v, e, s, flag);
//     }
// }
// const move = (s, e, flag) => {
//     if (flag)
//         console.log(s + ' ' + e);
// }

// solution(input[0]);

// let input = ['21'];
let N = Number(input[0]); // 원판의 개수
let ret = ''; // 출력 변수
let cnt = 0;  // 이동 횟수

const Hanoi = (start, mid, end, c) => {
    cnt++;  // 호출 시 마다 이동 횟수 증가
    if (c === 1) {  // 원판이 하나 남은 경우 시작지점에서 끝 지점으로 이동
        ret += start + ' ' + end + '\n';
    }
    else {  // 원판이 2개 이상 남았을 경우
        Hanoi(start, end, mid, c - 1);  // 원판의 개수 - 1 개 를 나머지 기둥으로 우선 옮김
        ret += start + ' ' + end + '\n';  // 마지막 원판을 목적지로 옮김
        Hanoi(mid, start, end, c - 1);  // 15줄에서 옮겨놨던 원판들을 다시 목적지로 옮김
    }
};

Hanoi(1, 2, 3, N);  // 1번에서 시작, 2번이 나머지 기둥, 3번에서 끝, N개의 원판
console.log(cnt);
if (N < 21)
    console.log(ret.trim());
