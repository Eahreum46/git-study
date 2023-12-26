//지금부터 작성하는 코드가 바로 명령형 프로그래밍 코드
//명령형 프로그래밍 코드 = 로우레벨/ 중복된 코드가 많음(비효율적)

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const result = document.querySelector("#result");

minus.addEventListener("click", () => {
  //current라는 변수 공간에 10진수 기준, 숫자형의 값을 가져와서 저장해라!
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current - 1;
});
plus.addEventListener("click", () => {
  //current라는 변수 공간에 10진수 기준, 숫자형의 값을 가져와서 저장해라!
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current + 1;
});
