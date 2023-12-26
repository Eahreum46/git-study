let now = new Date();
let firstDay = new Date(`2023-08-22`);
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passdeDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
document.querySelector(".accent").innerHTML = passdeDay + "일째 되는 날";

function calcDate(days) {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  console.log(someday);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerHTML = `${year}년 ${month}일 ${date}일`;
}

// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date200").innerHTML = `${year}년 ${month}일 ${date}일`;

// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date365").innerHTML = `${year}년 ${month}일 ${date}일`;

// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date500").innerHTML = `${year}년 ${month}일 ${date}일`;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
