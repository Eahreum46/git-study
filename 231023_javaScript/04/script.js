/*
1. 두 수를 받는다.
2. 최대공약수를 구하는 공식.
3. 클릭
4. 최대공약수 결과를 알림../ 이게 맞나..
*/

const f = document.querySelector("#number1").value;
const s = document.querySelector("#number2").value;
const button = document.querySelector("botton");
const result = document.querySelector("#result");

const getGCD = () => {
  let max = f > s ? f : s;
  let GCD = 0;
  for (let i = 0; i <= max; i++) {
    if (f % i === 0 && s % 1 === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = () => {
  result.innerText = getGCD(f.value, s.value);
};

// function getGCD(n, m) {
//   let max = n > m ? n : m;
//   let GCD = 0;
//   for (let i = 1; i <= max; i++) {
//     if (n % i === 0 && m % i === 0) {
//       GCD = i;
//     }
//   }
//   return GCD;
// }

// alert("`${number1}`와 `${number2}`의 최대공약수는 ${getGCD(f, s)}입니다.");
