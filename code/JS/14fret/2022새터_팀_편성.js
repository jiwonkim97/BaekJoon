let songList = ['someone like you',
  '단발머리',
  '너의 바다',
  '다시만난세계',
  'Champagne Supernova',
  '지독하게',
  'tiny riot',
  '여기에 있자',
  '스물다섯 스물하나'
];
let songs = {
  'someone like you': ['김보균', '전민', '김지원'],
  '단발머리': ['이강희', '김선우', '박건도', '한지우', '김수아', '김채웅'],
  '너의 바다': ['박시현', '박지한', '박건도','김채웅', '김지원', '박세영', '이선주'],
  '다시만난세계': ['김보균', '이지호', '홍윤표', '김지원', '정재화'],
  'Champagne Supernova': ['전민' ,'김재훈', '박건도', '김채웅', '김수아', '정재화'],
  '지독하게': ['김선우', '이지호', '김재훈', '박건도', '홍윤표', '박세영', '이선주'],
  'tiny riot': ['박지한', '김채웅', '김수아', '정재화'],
  '여기에 있자': ['박시현', '이지호', '김재훈', '한지우', '이선주'],
  '스물다섯 스물하나': ['이강희', '문수빈', '이지호', '한지우', '박세영', '정재화']
};
let session = {
  '베이스': ['한지우', '김채웅', '홍윤표'],
  '키보드': ['김수아', '박세영', '김지원'],
  '드럼': ['정재화', '이선주', '김채웅'],
  '보컬': ['박지한', '전민', '박시현', '김보균', '이강희', '김선우'],
  '기타': ['이지호', '김재훈', '박건도', '문수빈']
};
let unableTime = {
  '김보균': ['0 8, 19 24', '0 8, 19 24', '0 8, 15 18, 22 24', '0 18, 19 24', '0 18, 22 24', '0 8, 22 24', '0 8, 22 24'], //
  '김선우': ['0 17, 22 24', '0 17, 22 24', '0 17, 22 24', '0 17, 22 24', '0 17, 22 24', '0 8, 22 24', '0 8, 22 24'], //
  '김수아': ['0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 24', '0 8, 22 24', '0 24'],  //
  '김재훈': ['0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 24', '0 24', '0 8, 22 24', '0 8, 22 24'],  //
  '김지원': ['0 8, 19 24', '0 8, 19 24', '0 8, 22 24', '0 8, 19 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24'],  //
  '김채웅': ['0 8, 22 24', '0 8, 22 24', '0 8, 18 20, 22 24', '0 8, 22 24', '0 8, 22 24', '0 24', '0 24'],  //
  '문수빈': ['0 8, 18 24', '0 8, 22 24', '0 8, 18 24', '0 8, 22 24', '0 8, 18 24', '0 8, 22 24', '0 8, 22 24'],  //
  '박건도': ['0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24'],  //
  '박세영': ['0 8, 22 24', '0 8, 22 24', '0 8, 16 24', '0 8, 22 24', '0 8, 16 24', '0 13, 22 24', '0 13, 22 24'],  //
  '박시현': ['0 8, 16 24', '0 8, 22 24', '0 8, 15 17, 22 24', '0 8, 16 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24'], //
  '박지한': ['0 8, 22 24', '0 8, 15 24', '0 8, 14 24', '0 8, 15 24', '0 8, 15 24', '0 8, 22 24', '0 8, 22 24'], //
  '이강희': ['0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 24', '0 24'],  //
  '이선주': ['0 8, 22 24', '0 8, 20 24', '0 8, 22 24', '0 8, 20 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24'],//
  '이지호': ['0 8, 16 24', '0 8, 16 24', '0 8, 16 24', '0 8, 16 24', '0 8, 16 24', '0 24', '0 24'],  //
  '전민': ['0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24'],  //
  '정재화': ['0 15, 22 24', '0 15, 22 24', '0 15, 18 20, 22 24', '0 15, 22 24', '0 15, 22 24', '0 8, 22 24', '0 8, 22 24'],  //
  '한지우': ['0 8, 22 24', '0 8, 22 24', '0 8, 18 20, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24'], //
  '홍윤표': ['0 13, 22 24', '0 13, 22 24', '0 13, 22 24', '0 13, 22 24', '0 13, 22 24', '0 13, 22 24', '0 8, 22 24'] //
};
function replace(arr, start, end, value) {
  let target = [...arr];
  let back = target.splice(end).join('$$');
  let front = target.splice(0, start).join('$$');
  target = target.map(c => value).join('$$');
  return (front + '$$' + target + '$$' + back).split('$$');
}
let ableTime = {};
songList.forEach(song => {
  let timeTable = new Array(7).fill(new Array(25).fill(true));
  songs[song].forEach(member => {
    unableTime[member].forEach((unableT, index) => {
      unableT.split(', ').forEach(time => {
        let [a, b] = time.split(' ').map(Number);
        timeTable[index] = replace(timeTable[index], a, b, false);
      })
    })
  })
  ableTime[song] = timeTable;
})

console.log(ableTime['someone like you']);
// console.log(ableTime);
// let arr = new Array(3).fill(new Array(8).fill(true));
// for (let i = 0; i < 3; i++){
//   arr[i] = replace(arr[i], 1, 4, false);
//   arr[i] = replace(arr[i], 3,5, false);
//   arr[i] = replace(arr[i], 5, 6, false);
//   console.log(arr);
// }
