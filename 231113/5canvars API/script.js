const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//arc(x,y,r,시작각도"래디언", 종료각도"래디언", 반시계방향으로=기본)

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.quadraticCurveTo(200, 50, 350, 200);
