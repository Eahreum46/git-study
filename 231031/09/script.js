//길이가 서로 다른 A,B,C 세 개의 막대/ 만들수있으면 true, 없으면 False

//2개의 변의 합이 가장 큰 변의 값보다 작으면 삼각형이 될 수 없다.
/*
let a = parseInt(prompt(`첫 번째 숫자를 입력하세요`));
let b = parseInt(prompt(`두 번째 숫자를 입력하세요`));
let c = parseInt(prompt(`세 번째 숫자를 입력하세요`));

let sum = a + b;

let numTotal = (sum, c) => {
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
*/

let a = parseInt(prompt(`삼각형의 첫번째 변을 입력`));
let b = parseInt(prompt(`삼각형의 두번째 변을 입력`));
let c = parseInt(prompt(`삼각형의 세번째 변을 입력`));

let solution = (a, b, c) => {
  let max;
  let answer = "Yes";
  let total = a + b + c;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  if (total - max <= max) {
    answer = "No";
  }
  return answer;
};
console.log(solution(a, b, c));
