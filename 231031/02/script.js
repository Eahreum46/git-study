//심벌: 유일성을 보장하는 값을 생성하고싶을 때 사용!
// 주로 여러 개발자들이 공통의 프로젝트를 진행할 때, 객체의 키 이름이 중복될 것을 미연에 방지하고자 할때!

let var1 = Symbol();
let var2 = Symbol();
console.log(var1 === var2);

let id = Symbol();

const member = {
  name: "Park",
  [id]: 12345,
};

console.log(member);
console.log(member[id]);

// Symbol() 누군가 개발자도구로 페이지 배끼는것을 막기위해 보안상 쓰는 키

member.id = 6789;
console.log(member);

let grade = Symbol("grade");
member[grade] = "VIP";
console.log(member);

//객체에서 심벌키 활용하는 방법

const id01 = Symbol("id");
const tel01 = Symbol("telephone number");

const member03 = {
  name: "Park",
  age: 20,
  [id01]: 1234,
  [tel01]: function () {
    alert(prompt("전화번호:"));
  },
};

console.log(member03);
console.log(member03[id01]);
console.log(member03[tel01]());

let tel = Symbol.for("tel");

let phone = Symbol.for("tel");

console.log(tel === phone);

//전역심볼로 생성된 심볼의 키를 가져오려면?!

console.log(Symbol.keyFor(phone));
