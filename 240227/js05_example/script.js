import products from "./products";

const button = document.querySelector(".listBtn");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const div = document.createElement("div");

  li.id = product.id;
  h3.className = "name";
  h3.innerText = product.name;

  div.className = "price";
  div.innerText = price;

  li.appendChild(h3, div);
  ul.appendChild(li);
};

const impotDate = (product) => {
  products.data.map((product) => {
    if (!document.querySelector(product.id)) {
      createItem(product);
    }
  });
};

button.addEventListener("click", impotDate);
