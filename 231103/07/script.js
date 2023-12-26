/*
let displayHello = () => {
  console.log("Hello");
};
displayHello();
*/

//비동기 처리방식 3번째_async
/*
async function displayHello01() {
  console.log("Hello");
}
displayHello01();
*/

function whatYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));
}
function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatYourFavorite().then(displaySubject).then(console.log);

// async 와 await는 같이 다님/ 비동기처리 방식이라 앞의 결과값이 나오는 시간이 딜레이가 된다면
// 순서가 엉킬수있기때문에
