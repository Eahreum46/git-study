// function random(number) {
//   return Math.floor(Math.random() * number);
// }
// function bgChange() {
//   const rndCol =
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//   document.body.style.backgroundColor = rndCol;
// }
// bgChange();

var num = 10;
console.log(num);

var num = 20;
console.log(num);

// 재선언, 재할당 가능

let num01 = 10;
console.log(num01);

let num02 = 20;
console.log(num02);

num01 = 30;
console.log(num01);
// 재선언 불가능, 재할당 가능

const num03 = 10;
console.log(num03);

const num03 = 20;
console.log(num03);

num03 = 50;
console.log(num03);
// 재선언, 재할당 불가능
// 상수(*변하지 않을 값, 고정된 값)를 선언하고자 할 때

let x = 10;
let y = 20;
let sum = x + y;
console.log(sum);
// 먼저 작성한 코드 순서대로 읽기때문에 순서가 바뀌면 컴퓨터는 알수없음
