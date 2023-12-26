// 100 이하의 자연수 a,b,c를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.

/*
1.사용자에게 자연수 a,b,c를 받는다. prompt/for 반복문?
2.세 수 중 가장 작은 값을 구한다. document.querySelector? 가장 작은값? 3개중에..min......
3.출력 document.write/ console.log/ alret.
*/

/*
const num01 = parseInt(prompt(`100이하의 첫번째 숫자를 입력해주세요`));
const num02 = parseInt(prompt(`100이하의 두번째 숫자를 입력해주세요`));
const num03 = parseInt(prompt(`100이하의 세번째 숫자를 입력해주세요`));

const array = [num01, num02, num03];
const minValue = Math.min(...array);

document.write("minValue");
*/

let a = parseInt(prompt(`첫 번째 숫자`));
let b = parseInt(prompt(`두 번째 숫자`));
let c = parseInt(prompt(`세 번째 숫자`));

let numTotal = (a, b, c) => {
  let result;

  if (a < b) {
    result = a;
  } else {
    result = b;
  }
  if (c < result) {
    result = c;
  }
  return result;
};

console.log(numTotal(a, b, c));
