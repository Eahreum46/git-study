let x = 0;
let y = 0;

let targetX = 0;
let targetY = 0;

const speed = 0.09;

const cursorItem = document.querySelector(".cursorItem");
const circle = document.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

buttonAll.forEach((item) => {
  item.addEventListener("mousenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  // console.log(e.pageX, e.pageY);
  // h1.innerText = `X: ${x}, y: ${y}`;
  // box.style.top = y - 30 + "px";
  // box.style.left = x - 30 + "px";
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  window.requestAnimationFrame(loop);
};

loop();
