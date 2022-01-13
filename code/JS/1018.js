// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let input = ['8 8', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBBBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
// let input = ['10 13',
// 'BBBBBBBBWBWBW',
// 'BBBBBBBBBWBWB',
// 'BBBBBBBBWBWBW',
// 'BBBBBBBBBWBWB',
// 'BBBBBBBBWBWBW',
// 'BBBBBBBBBWBWB',
// 'BBBBBBBBWBWBW',
// 'BBBBBBBBBWBWB',
// 'WWWWWWWWWWBWB',
// 'WWWWWWWWWWBWB']

const CHESSBOARD = [
    [
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B']
    ],
    [
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W']
    ]
];
const [M, N] = input.shift().split(' ');
const board = input.slice(0, M).map(c => c.split(''))
let arr1 = [];
let arr2 = [];

for (let i = 0; i <= M - 8; i++) {
    for (let j = 0; j <= N - 8; j++) {
        let diff1 = 0;
        let diff2 = 0;
        for (let n = 0; n < 8; n++) {
            for (let m = 0; m < 8; m++) {
                if (board[i + n][j + m] !== CHESSBOARD[0][n][m])
                    diff1++;
                if (board[i + n][j + m] !== CHESSBOARD[1][n][m])
                    diff2++;
            }
        }
        arr1.push(diff1);
        arr2.push(diff2);
    }
}
console.log(Math.min(Math.min(...arr1), Math.min(...arr2)));
