const number = parseInt(prompt("숫자를 입력하세요!"));

const ispositive = (n) => {
  if (number > 0) {
    alert(`${n}는 양수입니다!`);
  } else if (number < 0) {
    alert(`${n}는 음수입니다!`);
  } else {
    alert(`${n}는 0입니다!`);
  }
};

if (!isNaN(number)) {
  ispositive(number);
}
