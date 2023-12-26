//JS 인터랙티브한 페이지!
//개념정복!
//주로 반복적으로 사용되는 JS 문법 패턴有
//마우스 및 페이지 스크롤의 좌표값은 알아둬야 함
//마우스가 이동하게 되었을 때, mousemove라는 이벤트 처리
//출력되는 값!
//clientX,clientY => 현재 내가 보고있는 웹브라우저 화면안에서의 좌표값!
//client는 현재 내가 작업중인 문서가 싱글모니터 안에서 모든게 해결되고 있는 상황!
//pageX,pageY => 만약 내가 현재 작업중인 문서의 height값이 5000픽셀이라면, 현재 내 눈에 보여지지 않는 영역까지도 좌표값을 찾아와주는 값!/ 보통 page 많이 씀.
//screenX,screenY => 만약 내가 현재 듀얼모니터를 사용중이라면, 첫번째 메인 모니터의 좌측상단 값을 0, 서브모니터의 좌측상단값은 메인모니터의 좌표값 + @
//=> 이 3가지만 알아도 웬만한 작업 가능

const h1 = document.querySelector("h1");
const box = document.querySelector(".box");
// 목표지점 => 마우스를 어딘가로 이동했을 때의 그 지점
let x = 0;
let y = 0;
// 타겟지점 => 목표지점을 향해서 따라가는 해당 아이템의 지점
let targetX = 0;
let targetY = 0;
// 속도
let speed = 0.5;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  console.log(e.pageX, e.pageY);
  h1.innerText = `X: ${x}, y: ${y}`;
  box.style.top = y - 30 + "px";
  box.style.left = x - 30 + "px";

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;
    box.style.top = targetY - 30 + "px";
    box.style.left = targetX - 30 + "px";
    window.requestAnimationFrame(loop);
  };
  loop();
});

// 무한루프 = 재귀함수!/ 저장 - 실행하는 순간 컴퓨터 무리와서 멈출 수 있음.
// const loop =()=>{
//   console.log(1);
//   window.requestAnimationFrame(loop)
// }

// loop()
