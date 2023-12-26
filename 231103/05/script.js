//fetch 함수() => Promice 객체를 반환합니다.
//Promise 객체가 사용할 수 있는 then,catch를 fetch도 가능

// fetch("student-2.json").then(console.log);

fetch("stuent-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = `
    <h1>${json.name}</h1>
    `;
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
