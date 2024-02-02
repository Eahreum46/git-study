const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];

container.style.backgroundImage = `url("./images/${pics[0]}")`;

/*
1)사용자가 버튼을 클릭한다면 컴퓨터는 클릭여부를 알아야한다! 
2)버튼이 클릭될 때마다 이미지가 변경되어야 한다
arrow.addEvent~
3)이미지는 현재 배열에 담겨있다
4)배열=> 인덱스 번호로 아이템의 순서를 기억할 수 있다
5)버튼을 클릭할 때마다, 인덱스 번호가 1씩 증가, 1씩 증가함으로 인해서 style로 정의해놓은 이미지경로가 변경해야한다

반복문&조건문
*/
