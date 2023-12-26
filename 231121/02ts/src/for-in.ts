//for in /for of 차이점?
//for in: 이터러블 객체의 인덱스값을 찾아올 때
//for of: 이터러블 객체 안에 담긴 값을 찾아올 때

const names = ["jack", "Jane", "Steve"];
for (let i in names) {
  const name = names[i];
  console.log(`[${i}]: ${name}`);
}
for jack = {
  name: "jack",
  age:32,
}
for(let i in jack){
  console.log(`${i}: jack${i}}`);
}