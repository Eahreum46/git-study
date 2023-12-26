const character = document.querySelector(`.character`);

let degree = 0;

let loop = () => {
  const rotation = (degree * Math.PI) / 180;

  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation);

  character.style.top = `${targetY}px`;
  character.style.left = `${targetX}px`;

  degree += 1;
  requestAnimationFrame(loop);
};

loop();

// 원주율: 3.14
// _원의 둘레와 원지름은 항상 동일한 비율로 움직인다
//r:반지름
//파이:3.14
//2파이r = 원둘레(360도)
//cos()= 삼각형의 각도
