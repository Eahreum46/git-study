// 해당 json파일 안에 "상품명"과 "생산년도"만 추출해서
// 웹브라우저 안에 result 안에 출력해주세요
/*
let xhr = new XMLHttpRequest();

xhr.open("get", "10.json", true);
xhr.send();

console.log(xhr);

let renderHTML = (contents) => {
  let output = "";
  for (let content of contents) {
    output += `
  <ul>
  <li>상품명: ${content.name}</li>
  <li>생산: ${content.year}</li>
  </ul>
  `;
  }
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let datas = JSON.parse(xhr.responseText);
    renderHTML(datas);
  }
};
*/

let url = "https://reqres.in/api/products/10";
let result = document.querySelector("#result");

let xhr = new XMLHttpRequest();

xhr.open("get", url, true);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);
    result.innerHTML = `
    <p>상품명 : ${product.data.name}<p/>
    <p>출시년도 : ${product.data.year}<p/>
    `;
  }
};
