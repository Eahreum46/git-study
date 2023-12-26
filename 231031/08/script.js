//자연수 N이 입력되면 1부터 N가지의 합을 출력하는 프로그램을 작성하세요.

let a = parseInt(prompt(`숫자를 입력하세요`));

let s = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};
console.log(s(a));
