//배열, 함수의 아이템 혹은 매개변수의 타입이 미지정 상태일 때 , 타입변수를 활용 타입정의!
//제네릭타입

//객체의 타입을 정의할 떄에도 제네릭타입을 적용할 수 있음!

//제네릭 총 집합!
//1)제네릭 함수 구문
function identity<T>(arg0: T): T {
  return arg0;
}
//1-1)화살표 함수 구문
const identity01 = <T>(arg0:T): T {
  return arg0;
}
//2)제네릭 타입별칭 구문
type IValuable<T> = {
  value: T;
};
//3)제네릭 클래스 구문
class valuable{
  //접근제어자(*public,private)
  //오버로드, 생성자함수
  constructor(public value:T):T{
     
  }
}