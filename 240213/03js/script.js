/* 
1) 기념일을 계산하기 위한 특정한 날짜 정보
2) 현 시점의 날짜 정보
 */

// 만난지 며칠째 되는 날
let now = new Date();
let firstDay = new Date("2024/1/1");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
console.log(passedDay);

const accent = document.querySelector("#accent span");
console.log(accent);
accent.innerText = `${passedDay}일`;

// 100일째 되는 날
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();
// const date365 = document.querySelector("#date365");
// datd100.innerText = `${year}년 ${month}월 ${date}일`;

// 함수를 활용해서 상단에 반복적으로 사용되고 있는 변수를 효율적으로 줄여보자!
const calcDate = (days) => {
  let future = toFirst + 100 * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  const date365 = (document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`);
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
