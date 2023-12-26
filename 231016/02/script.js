// Scope_전역, local_지역, block_블록 변수

// let hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// greeting();

/* let hi = "hello";

function Change() {
  hi = "bye";
}

console.log(hi);
Change();
console.log(hi); */

const factor = 5;
// const num = 10;

function calc(num) {
  return num * factor;
}

{
  let result = calc(10);
  document.write(`result : ${result}`);
}
