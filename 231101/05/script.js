//로또는 총 6개의 숫자를 추첨 random
//로또는 절대 6개의 숫자가 중복되어서는 안된다 set
//로또는 1부터 45까지의 숫자에서민 추첨이 된다 if

// const ranNum = Math.random();

/* Lotto 성립 조건-
1. 정수 1부터 45까지의 숫자만 허용!
2. 허용된 숫자 중 중복되지 않는 총 6개의 숫자만 추첨!
3. 언제 추첨될 숫자가 생성되어야 한ㄴ가? => 버튼을 클릭
4. 생성된 숫자는 어디에 출력되어야 하는가? =? result 노드 안에 출력!
*/

const button = document.querySelector("button");
const result = document.querySelector("#result");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

// const digitCount = 6;
// const maxNumber = 45;

button.addEventListener("click", (e) => {
  e.preventDefault();
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `중복숫자 발생! 재추첨하겠습니다~`;
  }
});
