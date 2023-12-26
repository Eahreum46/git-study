/*
const products = document.querySelectorAll("p");
console.log(products);

for (p of products) {
  p.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
}
*/

const buttons = document.querySelectorAll("p>span");
for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove(this);
  });
}
