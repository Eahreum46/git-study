// const currentYear = 2024;
// const result = document.querySelector("#result");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   const birthYear = prompt("태어난 년도를 입력해주세요!");
//   const age = currentYear - birthYear;
//   result.innerHTML = `당신의 나이는 ${age}세 입니다. 오늘도 파이팅하세요!!!😊`;
// });

// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</tr>";
// str += "</table>";
// document.write(str);

/* += : 기존 값에서 어떤 값을 더하고자 할 때 */
/* -= : 기존 값에서 어떤 값을 빼고자 할 때 */
/* *= : 기존 값에서 어떤 값을 곱하고자 할 때 */
/* /= : 기존 값에서 어떤 값을 나누고자 할 때 */
/* %/ : 기존 값에서 어떤 값을 나눈 후 나머지값을 구하고자 할 때 */

// const a = 10;
// const b = 3;

// const result = a > b ? "Javascript" : "Hello";
// document.write(result);

// const traffic = parseInt(prompt("교통비를 알려주세요!"));
// const eat = parseInt(prompt("식비를 알려주세요!"));
// const coffee = parseInt(prompt("커피음료비를 알려주세요!"));

// const normal = traffic + eat + coffee;
// console.log(normal);

// const result = normal > 10000 ? "절약해주세요!" : "참 잘했어요!";
// console.log(result);

// const x = 10;
// if (x > 5) {
//   console.log("x는 5보다 큽니다!");
// }

// const userInput = prompt("이름을 입력하세요!");
// console.log(userInput);

/* undefined : 아직 값이 정의되지 않은 미정의 값 / null : 유효하지 않은 값 */

// if (userInput === null) {
//   alert("사용자가 취소했습니다!");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

/* 사용자에게 숫자를 받아보세요!!! */
/* 해당 숫자가 짝수라고 한다면 "짝수입니다", "홀수입니다" */
/* 만약 사용자가 값을 입력하지 않고, 취소를 눌렀다면, "사용자가 취소하였습니다!" */

// const num = prompt("좋아하는 숫자를 입력하세요!");

// if (num === null) {
//   alert("사용자가 취소하였습니다!");
// }

// if (num % 2 === 0) {
//   alert("짝수입니다!");
// } else {
//   alert("홀수입니다!");
// }

// if (num === null) {
//   alert("사용자가 취소하였습니다!");
// } else if (num % 2 === 0) {
//   alert("짝수입니다!");
// } else {
//   alert("홀수입니다!");
// }

// const subject = prompt("신청할 과목을 입력하세요!, 1.HTML, 2.CSS, 3.JS");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청했습니다!");
//       break;
//     case "2":
//       alert("CSS를 신청했습니다!");
//       break;
//     case "3":
//       alert("JS를 신청했습니다!");
//       break;
//     default:
//       alert("잘못입력했습니다! 다시 입력해주세요!");
//   }
// }

/* 사용자에게 ID값과 PW값을 받아보세요!!! 만약에 ID값이 "korea", PW값이 "1234"라면 반갑습니다! 문구나 나오게해주시고, 만약 ID 혹은 PW가 하나라도 틀렸다면, "정보가 일치하지 않습니다." 라는 문구가 나오게 해주세요! */

const id = "korea";
const pw = "1234";

const user_id = prompt("당신의 아이디는?");

if (id === user_id) {
  const user_pw = prompt("당신의 비밀번호는?");
  if (pw === user_pw) {
    alert("고객님! 반갑습니다!");
  } else {
    alert("비밀번호를 재확인해주세요!");
    location.reload();
  }
} else {
  alert("아이디를 재확인해주세요!");
  location.reload();
}
