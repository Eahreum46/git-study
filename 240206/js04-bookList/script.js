const title = document.querySelector("#title");
// console.log(title);
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#booklist");


save.addEventListener("click", (e) => {
  e.preventDefault();

  const item = document.createElement("li");
  item.innerHTML = `${title.value} - ${author.value} <button class="delButton">삭제</button>`;
  // .value를 위에 쓰면 값을 찾아오지 못함
  bookList.appendChild(item);

  title.value = "";
  author.value = "";

  // delButtons.forEach((delButton) => {

  // });
  const delButtons = document.querySelectorAll(".delButton");
  for (let delButton of delButtons){
    delButton.addEventListener("click", funtion () {this.parentNode.parentNode.removeChild(this.parentNode)})
  }
});
