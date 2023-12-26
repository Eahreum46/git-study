const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//canvas API : 도형을 회전시키는 rotate()
//JS 반드시 각도 => 호도법(*래디안)

ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);
// translate 중심축 활용

ctx.translate(150, 150);
ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);
