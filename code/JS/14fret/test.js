let songs = [
  ['김보균', '김재훈', '김채웅', '김지원', '정재화'], //사계
  ['정재환', '문수빈', '한지우', '박세영', '조민영'], //배데빗
  ['박준호', '김재훈', '김채웅', '한지우', '이미르', '정재화'], //알루미늄
  // ['박지한', '김재훈', '김채웅', '박세영', '정재화'], //무이이야                      금요일 안함
  ['전민', '김보균', '김재훈', '김채웅', '한지우', '박세영', '이선주'],  //컴플    수요일 안함
  // ['이강희', '박지한', '문수빈', '김재훈', '조민영', '김지원', '이선주'], //너에게난  금요일 안함
  ['정재환', '박준호', '김채웅', '김지원', '이미르', '조민영'], //사랑할수록
  ['이강희', '김재훈', '문수빈', '김채웅', '김지원', '정재화'], //신호등
  ['전민', '문수빈', '김지원'] //운전면허                                         수요일 안함
]
let songs_name = [
  '사계',
  'bad habit',
  '알루미늄',
  // '무이이야',             //금 안함
  'complicated',          //수 안함
  // '너에게 난 나에게 넌',  //금 안함
  '사랑할수록',
  '신호등',
  'drivers license'       //수 안함
]
let len = songs.length;
let limit = 11;
let times = [[], []];

for (let i = 0; i < len - 3; i++) {
  for (let j = i + 1; j < len - 2; j++) {
    for (let k = j + 1; k < len - 1; k++) {
      for (let l = k + 1; l < len; l++) {
        if ([...new Set([i, j, k, l])].length !== 4)
          continue;
        for (let m = 0; m < len; m++) {
          if (m === i || m === j || m === k || m === l) {
            times[0].push(...songs[m]);
          }
          else {
            times[1].push(...songs[m]);
          }

          times[0] = [...new Set([...times[0]])];
          times[1] = [...new Set([...times[1]])];
        }
        if (times[0].length < limit + 1 && times[1].length < limit + 1) {
          console.log(songs_name[i] + ' ' + songs_name[j] + ' ' + songs_name[k] + ' ' + songs_name[l]);
          console.log(times[0]);
          console.log(times[0].length);

          console.log(times[1]);
          console.log(times[1].length);
        }
        times = [[], []];
      }
    }
  }
}
