// const addNum = (a, b) => {
//   return a + b;
// };

// const result = addNum(1, 3, 5, 7);

// console.log(result);

//반복문/ 증감연산자 / 전개연산자

// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// addNum(1, 3, 5, 7);

// const result = addNum(1, 3, 5, 7);
// console.log(result);

// // 전개 연산자 구문
// // 배열 내 들어가 있는 값을 찾아오게 함
// const fruits = ["apple", "banana", "grape"];
// console.log(...fruits);

// JS 내장(되어 있는)함수 = 개발자들이 자주 빈번하게 사용해야하니까!

//일정시간마다 문언가를 반복실행 시켜주는 타이머 함수가 대표적인 내장함수

//setInterval()

// const greeting = () => {
//   console.log("안녕하세요?");
// };

// setInterval(greeting, 2000);

// 일정시간마다 무언가를 증가시키는 setInterval 함수를 멈추게 하는 함수! = clearInterval

// const hello = () => {
//   let counter = 0;
//   console.log("반갑습니다.");
//   counter++;
//   if (counter === 5) {
//     clearInterval(hello);
//   }
// };

// const timer = setInterval(hello, 2000);

// const hour = document.querySelector(".hour");
// const min = document.querySelector(".min");
// const sec = document.querySelector(".sec");

// const clock = () => {
//   const now = new Date();
//   hour.innerText = now.getHours();
//   min.innerText = now.getMinutes();
//   sec.innerText = now.getSeconds();
// };

// setInterval(clock, 1000);

// const hello = () => {
//   console.log("안녕하세요!");
// };

// setTimeout(hello, 3000);
