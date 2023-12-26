let student = {
  name: "슛돌이",
  major: "체육교육학과",
  grade: 2,
};

let json = JSON.stringify(student);
console.log(json);

let member = '{"name": "영심이","age":30,"hobby": "swimming"}';

console.log(member);

let member_obj = JSON.parse(member);
console.log(member_obj);

//클라이언트가 서버에 존재하는 json 데이터를 가져오는 방법!
//AJAX 방법!
//Asynchronous Javascript And XML
//Asynchronous : 비동기/ 하나의 일처리가 끝나기 이전에도 여러 일처리를 받아서 순차적으로 처리
//일 처리 하나 끝나기 전까지 스톱, 하나하나 처리하는건 동기 처리
//svg : xml문법

//내부 API 객체를 활용해서 AJAX 방식으로
//클라이언트 & 서버가 소통할 수 있음.

let xhr = new XMLHttpRequest();

let jsonTset01 = xhr.open("GET", "student json", true);
// console.log(jsonTset01);
let jsonTset02 = xhr.send();
// console.log(jsonTset02);
console.log(xhr);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("success!");
    let students = JSON.parse(xhr.responseText);
    let result = document.querySelector("#result");
    result.innerText = `${students.name}학생은 ${students.grade}학년입니다.`;
  }
};
