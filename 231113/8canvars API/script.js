const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "../images/cat.jpg";
