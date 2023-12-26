//상단 신청과목 리스트를 하단 최종신청과목 영역에 출력되도록/
//단 각 멤버들이 중복해서 신청한 값이 존재한다면, 1번만 출력되도록 설정해주세요.

// let list = new Set([
//   "HTML",
//   "CSS",
//   "CSS",
//   "Javascript",
//   "Javascript",
//   "Typescript",
// ]);

// console.log(list);

const result = document.querySelector("#result");

const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "Javascript"];
const member3 = ["Javascript", "ypescript"];

const subjects = [...member1, ...member2, ...member3];
const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});

result.innerHTML = `(
  <ul>${[...resultList].map((subject) => `<li> ${subject} </li>`)}.join("")</ul>
);
`;
