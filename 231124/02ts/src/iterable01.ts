// iterable: 무언가를 순서대로 처리할 수 있는~
// iterable object: 무언가를 순서대로 처리할 수 있는 객체!
//JS에서 이터러블 객체: 배열, 문자열
//이터러블 객체의 특징: for of 반복문, 전개연산자(...), 구조분해 할당

const hi = "hello";
for (let ch of hi) {
  console.log(ch);
}

const chArray = [...hi];
console.log(chArray);

const [ch1, ch2] = hi;
console.log(ch1, ch2);

/*
이터러블 객체: 배열, 메서드

이터러블 객체:
1)for of 반복문
2)전개연산자 구문(...)
3)구조분해할당

이터러블 객체는 유일무이한 기능을 구현할 수 있는 Symbol 함수를 가지고 있는데,
해당 Symbol 함수는 이터레이터(iterator)라는 심볼키로 구성되어있다.

배열이름[심볼키이름]() <= 함수라서 ()써줌.
let it = arr[Symbol.iterator]()

배열이름.next() <= iterator 안에 있는 객체라는 심볼키가 가지고 있는 메서드 함수.
f next()

이 next 함수 덕분에 for of 반복문도 쓸 수 있는것.

프로토타입 함수: Array()

*/
