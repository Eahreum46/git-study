// 1) class 함수_1 =>

function calcSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}입니다.`);
}

calcSum();

// 2) class 함수_2 => 익명함수

const calcSum01 = function () {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}입니다./익명함수`);
};

calcSum01();

// 3) arrow 함수 => 화살표함수

const calcSum02 = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}입니다./화살표함수`);
};

calcSum02();

//사용자로부터 어떤 값을 받아서 해당 값을 가지고 기능을 처리할 수 없는 함수!
//재사용이 부족한 함수

//함수의 형태 = 함수 호출
// alert();
// prompt();

const num01 = Number(prompt("당신이 좋아하는 숫자를 입력해주세요!"));
const num02 = Number(prompt("당신의 나이를 입력하세요!"));

const sum = (a, b) => {
  let result = a + b;
  // alert(`두 수의 합: ${result}`);
  return result;
};

document.write(`두 수의 합은 ${sum(num01, num02)}입니다.`);

//문제점 원인!
//전역(global)변수와 지역(local)변수!

const multiple = (a, b, c = 8) => {
  return a * b + c;
};

const result = multiple(2, 4);

console.log(result);

// callback = cb함수
// call택시 => call을 해야 오는 택시

//html에서 작성한 구문을 JS에서 찾아서 불러올 수 있는데, 이때 찾아온 값을 통해서 어떤 실행을 하고 싶다면, DOM구조를 사용한다!

//DOM = document object model
// 문서 객체 모델
// html을 통해서 작성된 태그 및 문자열을 객체형태로 전환시켜서 JS로 가져오는 일종의 형식 => DOM

// html 태그 => CSS 찾아와서 스타일링
//선택자! => selector
//쿼리셀렉터
//query = 질문하다, 질의하다

const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", display);

// function display() {
//   alert("클릭하셨습니다!");
// }

const display = () => {
  alert("클릭하셨습니다!");
};

//호이스팅 hoisting 개념!
//끌어올리다!

//display가 뭔지,
//화살표 함수는 호이스팅을 못함 - 선언을 먼저 하거나, class함수를 써야 됨.

const showData = (name, age) => {
  alert(`안녕하세요! ${name}님. 나이가 ${age}살 이군요.`);
};

const getData = () => {
  const userName = prompt("당신의 이름을 입력하세요");
  const userAge = prompt("당신의 나이를 입력하세요");
  callback(userName, userAge);
};

getData(showData);
