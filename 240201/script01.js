// const img = document.querySelector("img");
// const desc = document.querySelectorAll(".user");
// console.log(desc);

// desc[0].innerText = "이  름 :  아이유";

// const desc = document.querySelector("#desc");

// desc.innerHTML = '<p class="user">이름 : 아이유</p>';

// const userName = document.querySelectorAll(".user");
// const profile = document.querySelector("#title");

// userName[0].addEventListener("click", () => {
// if (!userName[0].classList.contains("clicked")) {
//   userName[0].innerText = "이  름 : 이지은";
//   userName[0].classList.add("clicked");
// } else {
//   userName[0].innerText = "이  름 : 아이유";
//   userName[0].classList.remove("clicked");
// }

//   userName[0].classList.toggle("clicked");
// });

//함수 안의 함수 = 콜백함수

// profile.addEventListener("click", () => {
//   profile.innerText = "나의 프로필";
// });

/*

내가 푼 것
const screenLight = document.querySelector("body");
const lightMode = document.querySelector("button");

lightMode.addEventListener("click", () => {
  screenLight.classList.toggle("clicked");
});

*/

const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
});
