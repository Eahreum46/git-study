/*
let string = prompt("문자열을 소문자로 입력해주세요");
let upper_str = string.toUpperCase[0];

if (i > 0) {
  document.write = `${upper_str}`;
}
*/

// if (i > 0; i < string.length; i++) {
//   let upper_str = string.toUpperCase[0];
// }

// document.write = `${upper_str}`;
// console.log(upper_str);

/*
const string = prompt("문자열을 소문자로 입력해주세요");
const firstCh = string[0].toUpperCase();
const remainCh = string.slice(1);
const result = firstCh + remainCh;
document.write(result);
*/

const string = prompt("문자열을 소문자로 입력해주세요");
const result01 = [string[0].toUpperCase(), ...string.slice(1)].join("");
console.log(result01);
document.write(result01);

// JS 문법이 어렵기도 하지만,, 학습하는 방법.
// JS 문법을 공부 한 후, JS 활용 방법을 응용하며 연습해야 함.
// 클론 코딩!/ 사고하고 응용하는 방법을 알아야 됨..
