//미리약속!
//만약, 네가 지금 실행하고자 하는 명령문이 성공하게되면 A가 나오게 하고, 만약 이게 실패하게되면 B가 나오게 하자!
//콜백함수 일방적인 원웨이!
//Promise JS 내장객체 => class생성자 => Prototype함수=> Prototype객체 => Instance객체 생성

const pizza = new Promise((resolve, reject) => {
  if (true) {
    resolve("피자를 주문합니다!");
  } else {
    reject("피자를 주문하지 않습니다!");
  }
});
console.log(pizza);
//<fulfilled>: 실행되었다.
//<reject>: 거절되었다.

pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료");
  });
