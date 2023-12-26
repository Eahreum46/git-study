/*
const title = document.querySelector(".depthWrap span");
const prograssBar = document.querySelector(".bar");
let scrollNum = 0;
let documentHight = 0;
let per01 = 0;
let per02 = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHight = document.body.scrollHeight - window.innerHeight;
  per01 = percent(scrollNum, documentHight);
  per02 = percent(scrollNum, documentHight) + "%";
  title.innerText = per01;
  prograssBar.style.width = per02;
});
*/

const depthWrap = document.querySelector(".depthWrap");
const prograssBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");
let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight = window.innerHeight;
  per = percent(scrollNum.documentHeight);
  depthWrap.querySelector("span").innerText = scrollNum.toFixed(0);
  prograssBar.style.width = per + "%";
  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 2}%)`;
});
