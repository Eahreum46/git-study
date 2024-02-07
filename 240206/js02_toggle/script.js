const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});

// const btn = document.getElementById("btn")
//querySelector와 같은 의미, 더 빠름
//querySelector 이건 나중에 나온 문법

//class 함수 VS arrow 함수
//hoisting 기능 구현

/*
btn.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

클래스 함수일때, btn 중복되는 부분 this 선택자 사용 가능 -> 화살표함수엔 this 선택자 못 씀
*/
