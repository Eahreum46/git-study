window.onload = function () {
  const bgCount = 5;
  let randomNumber = Math.random() * bgCount + 1;

  document.body.style.backgroundImage = `url(/imgs/bg-${randomNumber}.jpg)`;
};
