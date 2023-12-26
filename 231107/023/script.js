const rectangle = document.querySelector(`.rectangle`);
const button = document.querySelector(`.button`);
const onClickButton = () => {
  const randomHue = Math.trunc(Math.random() * 361);
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
  rectangle.style.setProperty(`--start`, randomColorStart);
  rectangle.style.setProperty(`--end`, randomColorEnd);
};
// * trunc - 무조건. 정수값만 반환(자주 쓰진않음)

button.addEventListener("click", onClickButton);
