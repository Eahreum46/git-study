const canvas = document.querySelector("canvas");
// canvas API => 2D 그래픽 요소, getContext()

const ctx = canvas.getContext("2d");

// 자바스크립트에서는
// 1)시간개념: 밀리초/초
// 2)좌표계: 웹좌표계/데카르트좌표계
// 3)각도: /육십분법

ctx.fillStyle = "rga(200,0,0)";
ctx.fillRect(10, 10, 200, 100);

ctx.strokeStyle = "#000";
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45);
