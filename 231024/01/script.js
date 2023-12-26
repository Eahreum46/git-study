const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", () => {
  imgBox.src = "/img/pic-6.jpg";
});
imgBox.addEventListener("mouseout", () => {
  imgBox.src = "/img/pic-1.jpg";
});
