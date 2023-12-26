const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();

let.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = "../images/bird.jpg";

ctx.beginPath();
ctx.arc(300, 200, 150);
