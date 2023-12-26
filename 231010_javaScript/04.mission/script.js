// let age = prompt("당신의 태어난 연도를 알려주세요!");
// let nowYear = today.getYear();
// let nowYear = today.getYear();

// document.write(`당신의 나이는 ${getYear}-`);

let today = new Date();
let currentYear = today.getFullYear();
let birthYear = prompt("태어난 년도를 입력하세요!");
let age = currentYear - birthYear + 1;

document.write(`당신의 나이는 ${age}세 입니다.`);
