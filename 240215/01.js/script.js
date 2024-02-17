//1.버튼에 대한 정의
//2.선택한 버튼값이 출력될 공간에 대한 정의
//3.우리가 어떤 버튼을 선택했을 때, 컴퓨터 역시 선택한 값이 출력될 공간에 대한 정의
//4.컴퓨터가 랜덤으로 가위.바위.보 중 하나를 선택할 수 있도록 정의
//5.컴퓨터와 내가 낸 가위.바위.보를 기준으로 누가 이겼는지를 확인할 수 있도록 해주는 기능 정의
//6.최종적으로 컴퓨터와 내가 시합한 가위.바위.보 게임의 승자가 누구인지를 출력할 수 있는 공간에 대한 정의

const userChoice = document.querySelector(".you-choice");
const computerChoice = document.querySelector(".computer-choice");
const winner = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const result = ["가위", "바위", "보"];

const show = (user, computer, message) => {
  userChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부!";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
