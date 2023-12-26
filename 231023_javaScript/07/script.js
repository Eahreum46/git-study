const box = document.querySelector("body");
box.addEventListener("click", (e) => {
  console.log(`이벤트 발생 위치: ${e.pageX},${e.pageY}`);
  console.log(`이벤트 발생 위치: ${e.screenX},${e.screenY}`);
});
