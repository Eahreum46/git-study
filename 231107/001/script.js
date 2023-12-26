//js의 기본문법을 한 번 살펴보았습니다.
// js는 인터랙티브한 웹&앱 페이지를 구현하는데 있어서 필수 프로그래밍 언어
// 추가하기 위해서 여러가지 문법 + 알고리즘 훈련

// JS내장객체들이 굉장히 많았다.

// alert(`안녕하세요.`);
// prompt(`당신의 이름을 입력해주세요.`);

// console.log("안녕하세요", "지금은", new Date(), "입니다.");

// JS는 사칙연산이 가능한 언어이다.
// + - * /
// %: A % B = A를 B로 나눈 후 나머지 값을 반환해주는 연산자

// let var const
// const 변하지 않는 상수값
// let 값이 변할것같으면
// var 쓰지말것

// 변수: 일종의 데이터를 담는 바구니
// 바구니 안에는 무엇을 담을 수 있을까
// 어떤 데이터를 담을 수 있을까?
// 숫자, 문자, 논리형(*불리언), "객체">배열, 함수

// let num1 = 10;
// let str1 = "json";
// let bln = true;
// let obj = {
//   student: "json",
//   grade: 2,
// };
// let func = () => {
//   console.log("test");
// };

// let a = 1;
// b = 2;
// c = 3;
// *let을 그때그때마다 쓰지않아도 된다.

// let/const-
// let 재선언 불가능, 재할당 가능
// const 재선언, 재할당 불가능

// let test01 = "test"
// test01 = "test02" <- let안쓰고 재할당

// const test02 = "test";
// test02 = "test03"; <- 오류

// 비교연산자;
// A == B;
// A === B;

// 부정연산자를 결합한 비교연산자
// A!=B
// A!==B
// < > <= >=

// JS 데이터를 복사해오는 방식이 2가지
// 원시타입 복사, 참조주소 복사
// JS 변수를 선언하게되면, 선언과 동시에 로컬컴퓨터 내부에 해당 변수만의 고유한 주소가 생성되게 된다.

// ex)
// const array01 = [1,2,3]
// const array02 = [1,2,3]

// array01 == array02 [false]

// const array02 = array01

// array01 == array02 [true]

//대입연산자
// let k = 10;
// let j = 20;
// k += j;
// k = k + j;
// 10 + 20;

//-여기까지 변수, 자료형, 비교연산자, 대입연산자//

//함수//

//클래스 함수, 함수 선언
// function myFunc() {
//   console.log("test");
// }

// myFunc(); // 함수 호출(호출하지않으면 의미가 없다)

//화살표 함수 형태, 함수 선언
// const myFunc01 = () => {
//   console.log("test");
// };

// myFunc01();
// console.log는 답을 돌려주는 자동 기능이 포함되어있다고 봐도 됨

//함수안에 return문이 필요할 때에는-
// 사용자가 함수안에 어떤 인자값을 전달한 후 그 인자값으로 함수가 어떤 연산작업을 거쳐서 결과값이 나왔는데,
// 그 결과값을 받고싶을때!

// const myFunc02 = (a) => {
//   const result = a + 2;
//   // return result; - 이렇게 쓰면 지역변수라서 전역에서 못알아들음
//   // (a)인수,인자값
//   return console.log(result);
//   // return console.log(result); - 이렇게 쓰면 전역에서 알아들을 수 있음
// };

// myFunc02(1);
//(1)값 할당(인자값)

//return 문을 쓰지않으면 계산해도 (출력기가 없는 개념) 답을 받아올수가 없음.

// const calcSum = (a, b, c) => {
//   // 매개변수 a,b,c 를 넣기로 했으면 그만큼의 인자값은 받아와야 출력이 됨
//   const result = a + b + c;
//   return console.log(result);
// };
// calcSum(1, 2, 3);

// const calcFunc = (price, tax = 20) => {
//   // tax = 20 -> 매개변수에 디폴트값 주는 방법
//   const result = price + tax;
//   return console.log(result);
// };

// calcFunc(100);
// //결과값 = 120

//전개연산자 형식으로 쓴 것/ 변수에서는 못씀, 배열에서만 쓸 수 있다(정해진 배열 안에서 반복해서 사용하는 것)
const array = [1, 2, 3, 4, 5];

const calcFunc = (...number) => {
  let result = 0;
  for (let value of number) {
    result += value;
    //result = result + value 의미
  }
  return console.log(result);
};

calcFunc(...array);

//조건문**_거의 단일선택지일때 사용

// const myPrice = 100;_ 이건 고정 값
let myPrice = prompt("값을 넣어주세요!");
//let 사용자에게 받을 값이 계속 바뀔테니까

//*조건식이 참이어야만 실행됨
if (myPrice >= 50) {
  alert("myPrice는 50 이상입니다.");
} else if (myPrice >= 10) {
  alert("myPrice는 10이상 50미만입니다.");
} else {
  //else 앞 조건의 부정/ 아니라고 한다면
  alert("myPrice는 10미만입니다.");
}
