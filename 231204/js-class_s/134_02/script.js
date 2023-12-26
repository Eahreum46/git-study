//드래그 이동 완료 후 발생시킬 수 있는 이벤트 종류!

//JS 이벤트 : 클릭, 스크롤, 마우스무브, 드래그
//dragstart : 드래그를 시작한 시점
//drag : 드래그를 하고 있는 시점
//dragend : 드래그가 완료된 시점

//dragenter : 드래그 중인 아이템이 지정한 위치 반경에 들어왔을 때
//dragover : 드래그 중인 아이템이 지정한 위치에 정확하게 올라와있을 때 계속적으로 반응하는 이벤트
//dragleave : 드래그 중인 아이템이 지정한 위치에서 벗어났을 때
//drop : 드래그 중인 아이템을 지정한 위치에 놓았을 때

const box = document.querySelector(".box");

box.addEventListener("dragenter", () => {
  console.log("드래그 엔터 이벤트");
});
box.addEventListener("dragover", (e) => {
  e.preventDefault();
});
// box.addEventListener("dragover", () => {
//   console.log("드래그 오버 이벤트");
// });
box.addEventListener("dragleave", () => {
  console.log("드래그 리브 이벤트");
});
box.addEventListener("drop", () => {
  console.log("드래그 드롭 이벤트");
});
//드래그에서 드랍이벤트를 처리할 때에는 반드시 드래그 오버 이벤트의 기본속성을
//무력화해야한다
