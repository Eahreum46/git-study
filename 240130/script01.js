const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".container");

const display = () => {
  container.style.display = "flex";
  openButton.style.display = "none";
};
const close = () => {
  container.style.display = "none";
  openButton.style.display = "block";
};

openButton.addEventListener("click", display);
closeButton.addEventListener("click", close);

// openButton.addEventListener("click", () => {
//   container.style.display = "flex";
//   openButton.style.display = "none";
// });

// closeButton.addEventListener("click", () => {
//   container.style.display = "none";
//   openButton.style.display = "block";
// });

/*
-미션-
사용자에게 특정 숫자를 전달 받으세요!
해당 숫자가 양수라면, 00숫자는 양수입니다. -알림창
해당 숫자가 음수라면, 00숫자는 음수입니다. -알림창
해당 숫자가 양수, 음수도 아닌 0이라면, 입력하신 숫자는 0입니다. -출력
*/

// 예외조항 처리
// -숫자가 아닌 예기치 못한 값이 왔을 때에는 애초에 프로그래밍 코드 자체가 실행 될 필요가 없음!

const number = Number(prompt("숫자를 입력하세요!"));

//isNaN => 매개변수에 들어온 값이 숫자인지, 아닌지를 논리적으로 판단해주는 함수입니다.

//매개변수가 숫자이면, false 반환 || 매개변수가 숫자가 아니면, true 반환

const isPosive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수입니다`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다`);
  } else {
    alert(`${n}은 0입니다.`);
  }
};

if (!isNaN(number)) {
  isPositive(number);
}
