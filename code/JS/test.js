let songs = [
  ['김보균', '김재훈', '김채웅', '김지원', '정재화'], //사계
  ['정재환', '문수빈', '한지우', '박세영', '조민영'], //배데빗
  ['박준호', '김재훈', '김채웅', '한지우', '이미르', '정재화'], //알루미늄
  // ['박지한', '김재훈', '김채웅', '박세영', '정재화'], //무이ㅣ야
  ['전민', '김보균', '김재훈', '박지한', '한지우', '박세영', '이선주'],  //컴플
  ['이강희', '박지한', '문수빈', '김재훈', '조민영', '김지원', '이선주'], //너에게ㅏㄴ
  ['정재환', '박준호', '김채웅', '김지원', '이미르', '조민영'], //사랑할수록
  ['이강희', '김재훈', '문수빈', '김채웅', '김지원', '정재화'], //신호등
  ['전민', '문수빈', '김지원'] //운전면허
]
let len = songs.length;
let limit = 14;
let times = [[], []];

// times[0] = times[0].concat(...songs[0]);
// times[0] = times[0].concat(...songs[2]);
// times[0] = times[0].concat(...songs[3]);
// times[0] = times[0].concat(...songs[7]);

// times[1] = times[1].concat(...songs[1]);
// times[1] = times[1].concat(...songs[5]);
// times[1] = times[1].concat(...songs[6]);

// times[0] = [...new Set([...times[0]])];
// times[1] = [...new Set([...times[1]])];

// console.log(times[0])
// console.log('=============')
// console.log(times[1])

for (let i = 0; i < len - 3; i++) {
  for (let j = 1; j < len - 2; j++) {
    for (let k = 2; k < len - 1; k++) {
      for (let l = 3; l < len; l++) {
        for (let m = 0; m < len; m++) {
          if (m === i || m === j || m === k || m === l) {
            times[0].push(...songs[m]);
          }
          else {
            times[1].push(...songs[m]);
          }

          times[0] = [...new Set([...times[0]])];
          times[1] = [...new Set([...times[1]])];
          // console.log('==========================')
          // console.log(times[0])
          // if (times[0].length < 12 || times[1].length < 12)
          //   console.log('수 :' + times[0] + '\n' + '금 :' + times[1]);
        }
        // console.log(times[0])
        if (times[0].length < limit || times[1].length < limit) {
          console.log(i + ' ' + j + ' ' + k + ' ' + l);

          console.log(times[0]);
          console.log(times[1]);
        }
      }
    }
  }
}
