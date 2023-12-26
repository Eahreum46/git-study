const bodyContent = document.body;
const btn = document.querySelector("#btn");
const btnExit = document.querySelector("#btnExit");

const myrequestFullScreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
};
btn.addEventListener("click", () => {
  myrequestFullScreen(bodyContent);
});

const myCancleFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

btnExit.addEventListener("click", () => {
  myCancleFullScreen();
});
