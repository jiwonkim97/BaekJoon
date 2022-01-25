let songs = {
  'someone like you': ['김보균', '전민', '김지원'],
  '단발머리': ['이강희', '김선우', '박건도', '한지우', '김수아', '정재화'],
  '너의 바다': ['박시현', '박지한', '박건도','홍윤표', '김지원', '박세영', '이선주'],
  '다시만난세계': ['김보균', '이지호', '홍윤표', '김지원', '정재화'],
  'Champagne Supernova': ['전민' ,'김재훈', '박건도', '홍윤표', '김수아', '정재화'],
  '지독하게': ['김선우', '이지호', '김재훈', '박건도', '홍윤표', '박세영', '이선주'],
  'tiny riot': ['박지한', '한지우', '김수아', '정재화'],
  '여기에 있자': ['박시현', '이지호', '김재훈', '한지우', '이선주'],
  '스물다섯 스물하나': ['이강희', '문수빈', '이지호', '한지우', '박세영', '정재화']
};

let session = ['김보균', '김선우', '김수아', '김재훈', '김지원', '문수빈', '박건도', '박세영', '박시현', '박지한', '이강희', '이선주', '이지호', '전민', '정재화', '한지우', '홍윤표'];


let unableTime = {
  '김보균': ['0 8, 19 24', '0 8, 19 24', '0 8, 15 18, 22 24', '0 18, 19 24', '0 18, 22 24', '0 8, 22 24', '0 8, 22 24'], //
  '김선우': ['0 17, 22 24', '0 17, 22 24', '0 17, 22 24', '0 17, 22 24', '0 17, 22 24', '0 8, 22 24', '0 8, 22 24'], //
  '김수아': ['0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 24', '0 8, 22 24', '0 24'],  //
  '김재훈': ['0 8, 22 24', '0 8, 22 24', '0 8, 22 24', '0 24', '0 24', '0 8, 22 24', '0 8, 22 24'],  //
  '김지원': ['0 8, 19 24', '0 8, 19 24', '0 8, 22 24', '0 8, 19 24', '0 8, 22 24', '0 8, 22 24', '0 8, 22 24'],  //
  // '김채웅': ['0 8, 22 24', '0 8, 22 24', '0 8, 18 20, 22 24', '0 8, 22 24', '0 8, 22 24', '0 24', '0 24'],  //
  '문수빈': ['0 19, 22 24', '0 8, 22 24', '0 19, 22 24', '0 8, 22 24', '0 19, 22 24', '0 8, 22 24', '0 8, 22 24'],  //
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

let ableTime = {
    'someone like you': new Array(7),
    '단발머리': new Array(7),
    '너의 바다': new Array(7),
    '다시만난세계': new Array(7),
    'Champagne Supernova': new Array(7),
    '지독하게': new Array(7),
    'tiny riot': new Array(7),
    '여기에 있자': new Array(7),
    '스물다섯 스물하나': new Array(7)
  };
let teams = {
    'A': [
          '너의 바다', 'tiny riot', '여기에 있자', '스물다섯 스물하나'
    ],

    'B': [
'someone like you', '단발머리', '다시만난세계', 'Champagne Supernova', '지독하게'
    ]
}
let teamList = [
    'A',
    'B'
];
let teamAbleTime = {
    'A': new Array(7),
    'B': new Array(7)
}

function timeBinary(arr) {
    let time = new Array(24);
    time.fill(0);
    for(let i=0; i<arr.length; i++){
        let [startTime, endTime] = arr[i].split(' ');
        for(let j=startTime; j<endTime; j++) time[j] = 1;
    }
    return time;
}

for(let i=0; i<session.length; i++) {
    for(let j=0; j<7; j++){
        let timeArray = unableTime[session[i]][j].split(', ');
        let timeTableArray = timeBinary(timeArray);
        unableTime[session[i]][j] = timeTableArray.join('');
    }
}

for(let i=0; i<songList.length; i++) {
    //console.log(songList[i]);
    for(let k=0; k<7; k++) {
        let dayTableString = '000000000000000000000000'.split('');
        for(let j=0; j<songs[songList[i]].length; j++) {
            let memberdayTableString = unableTime[songs[songList[i]][j]][k].split('');
            for(let l=0; l<24; l++) {
                if(memberdayTableString[l] == '1') dayTableString[l] = 1;
            }
            //console.log(songs[songList[i]][j] + dayTableString.join('') + '\n');
        }
        ableTime[songList[i]][k] = dayTableString.join('');
    }
}
// console.log(ableTime);

for(let i=0; i<teamList.length; i++) {
    //console.log(songList[i]);
    for(let k=0; k<7; k++) {
        let dayTableString = '000000000000000000000000'.split('');
        for(let j=0; j<teams[teamList[i]].length; j++) {
            let memberdayTableString = ableTime[teams[teamList[i]][j]][k].split('');
            for(let l=0; l<24; l++) {
                if(memberdayTableString[l] == '1') dayTableString[l] = 1;
            }
            //console.log(songs[songList[i]][j] + dayTableString.join('') + '\n');
        }
        teamAbleTime[teamList[i]][k] = dayTableString.join('');
    }
}

console.log(teamAbleTime);

function outputStringMaker(str) {
    let arr = new Array(24);
    let flag = 0;
    let startTime, endTime;
    arr = str.split('').map(Number);
    for(let i=0; i<24; i++) {
        if(!arr[i]) {
            flag = 1;
            startTime = i;
            while(1){
                i++;
                if(arr[i]) {
                    endTime = i;
                    break;
                }
            }
            break;
        }
    }
    if(!flag) return 0;
    else return startTime + ' ~ ' + endTime;
}

const printSchedule = (tAT, tL) => {
    for (let i=0; i<tL.length; i++) {
    console.log(tL[i] + ' 팀은 ');
    for (let j=0; j<7; j++) {
        let str = outputStringMaker(tAT[tL[i]][j]);
        let output = '';
        switch(j) {
            case 0:
                output += '월요일 ';
                break;
            case 1:
                output += '화요일 ';
                break;
            case 2:
                output += '수요일 ';
                break;
            case 3:
                output += '목요일 ';
                break;
            case 4:
                output += '금요일 ';
                break;
            case 5:
                output += '토요일 ';
                break;
            case 6:
                output += '일요일 ';
                break;
        }
        if(!str) output += '연습이 불가능 합니다.';
        else output = output + str + '시 연습이 가능합니다.';
        console.log(output + '\n');
    }
    console.log('===================================');
}
}
// console.log(ableTime)
