const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// ctx = context
let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
};
img.src = "../images/cat.jpg";
