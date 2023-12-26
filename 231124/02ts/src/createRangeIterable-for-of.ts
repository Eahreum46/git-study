import { createRangeIterable, RangeIterable } from "./createRangeIterable";
const iterable = new RangeIterable(1, 4);
console.log(iterable);
for (let value of iterable) console.log(value);

//굉장히 난이도가 있는 내용.../ 오늘 한 공부-

//JS 이터러블 객체. 이터레이터 객체/ 제너레이터 함수 / next()
//TS 클래스 생성자 => 이터러블한 객체 생성
//for of 반복문 사용!
