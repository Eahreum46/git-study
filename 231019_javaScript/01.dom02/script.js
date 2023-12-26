// setInterval: 일정 시간마다 반복 할 수 있게 하는 함수
// clearInterval: setInterval의 반복실행을 멈추게 하는 함수
// setTimeout: 일정 시간이 지난 후에 실행하게 하는 함수

// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

let counter = 0;

let timer = setInterval(() => {
  console.log("안녕하세요!");
  counter++;
  if (counter === 5) {
    clearInterval(timer);
  }
}, 2000);

setTimeout(() => {
  console.log("기다려주세요!");
}, 3000);
