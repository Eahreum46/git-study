// call back 예시
// *왜 콜백 함수를 사용해야하는가?
// single thread => 1차선 도로! 한번에 하나의 실행문만 실행시킴!

// function showData(name, age) {
//   alert(`안녕하세요! ${name}님, 나이가 ${age}살 이군요!`);
// }

// function getData(callback) {
//   let userName = prompt("이름을 입력하세요!");
//   let userAge = parseInt(prompt("나이를 입력하세요!"));
//   callback(userName, userAge);
// }

// getDate(showData);

//자바스크립트 함수 = 1급 시민
//각 언어마다 1급 시민이 있음(C언어, 자바...)
/*
1. 변수에 값을 할당 할 수 있어야 1급 시민
2. 다른 함수의 매개변수 혹은 인자값으로 사용할 수 있어야 1급 시민
3. 다른 함수에서 반환값으로 반환할 수 있어야 한다!!
*/

let sum = (a, b) => a + b;
console.log(sum(2, 10));

function hello() {
  return "안녕하세요!";
}

function bye() {
  return "안녕히가세요!";
}

function userCheck(name, fn) {
  console.log(`${name}님`, fn());
}

userCheck("홍길동", hello);
userCheck("도레미", bye);

let init = () => {
  return function (a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`init(30,20):${init()(30, 20)}`);
