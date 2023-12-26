const character = document.querySelector(".character");

//JS 이벤트 : 클릭, 스크롤, 마우스무브, 드래그
//dragstart : 드래그를 시작한 시점
//drag : 드래그를 하고 있는 시점
//dragend : 드래그가 완료된 시점

character.addEventListener("dragstart", () => {
  console.log("드래그 이벤트 시작");
});
character.addEventListener("drag", () => {
  console.log("드래그 이벤트 진행중");
});
character.addEventListener("dragend", () => {
  console.log("드래그 이벤트 종료");
});
