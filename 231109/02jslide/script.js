//변수 및 버튼 정의!
const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;
let currentIdx = 0;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//ul & li 너비값 정의
const updateWidth = () => {
  let currentSlide = document.querySelectorAll(".slides li");
  let newSlideCount = currentSlide.length;
  let newWidth = `
  ${(slideWidth + slideMargin) * newSlideCount - slideMargin}px
  `;
  slide.style.width = newWidth;
  console.log(newWidth);
};
// updateWidth();

//ul & li 위치값 세팅
const setInitialPos = () => {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transforn = `translateX(${initialTranslateValue}px)`;
};

// updateWidth();
// setInitialPos();

//li태그 복제
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChid(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);

    updateWidth();
    setInitialPos();
  }
};
makeClone();

//슬라이드 이동함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  console.log(currentIdx, slideCount);

  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slide.classList.remove("animated");
      slide.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slide.classList.add = "animated";
    }, 600);
  }
};

//자동 슬라이드
let timer = undefined;

const autoSlide = () => {
  timer = setInterval(() => {
    moveSlide(currentIdx + 1);
  });
};
autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};
slides.addEventListener("mouseenter", () => {
  stopSlide();
});
slides.addEventListener("mouseleave", () => {
  autoSlide();
});

//버튼 클릭 이벤트
prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});
