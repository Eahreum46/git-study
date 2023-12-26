/*
const displayYear = document.querySelector("#year");
const displayMonth = document.querySelector("#month");
const displayDate = document.querySelector("#date");
const current

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();
*/

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultYear = document.querySelector("#years");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  let passed = today.getTime() - birthDaty.getTime();
  let passedYear = Math.floor(passsde / (1000 * 60 * 60 * 24 * 30 * 12));

  resultYears.innerText = `내가 태어난지
  ${passedYear}년이 지났습니다! 부모님 감사합니다.`;
});
