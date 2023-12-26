//제네릭 단어!
// 배열의 타입정의할 때!
// 배열안에 입력될 아이템의 타입이 미정인 경우에서 배열의 타입을 정의해야하는 경우!

const func = <T>(array: T[]) => {};

function g1<T>(a: T): void {
  console.log(`test: ${a}`);
}
function g2<T>(a: T, b: Q): void{
  console.log(`test: `);
};
//forEach(value, index, array)
