function func() {
  console.log("1");
  console.log("2");
  console.log("3");
}

console.log(func());

//제너레이터 함수!
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

//제너레이터 함수 => 이터러블 객체에서 사용할 수 있는 next()메서드 함수를 사용할 수 있다!
let g1 = gen();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

let g2 = gen();

for (let i of g2) {
  console.log(i);
}

//지금까지 복습한 내용!
/*
JS
*/
