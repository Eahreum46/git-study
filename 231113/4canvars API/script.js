const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//arc(x,y,r,시작각도"래디언", 종료각도"래디언", 반시계방향으로=기본)

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI + 2, true);
ctx.closePath;
ctx.fill();
ctx.stroke;
