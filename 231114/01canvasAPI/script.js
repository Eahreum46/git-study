const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 원점의 위치를 옮기는 메서드 = translate()

ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);
ctx.save();
// 일단 여기까지 저장하고

ctx.translate(150, 150);
// 여기 기준으로 새로 만들거야/원점 재정의
ctx.fillStyle = "#222";
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 20);
// 두번째 박스는 translate를 쓰지않아서 (150, 150)원점을 공유!
ctx.restore();
//restore 이전시점의 원점으로 복구
ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 20);
