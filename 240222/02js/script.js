const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("txt span");
for (let item of items) {
  item.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video".play());
    item.addEventListener("mouseleave", (e) => {
      e.currentTarget.querySelector("video".pause());
    });
  });
  item.addEventListener("click", (e) => {
    const tit = e.currentTarget.querySelector("h2").innerText;
    const txt = e.currentTarget.querySelector("p").innerText;
    const vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("video").play();
    aside.classList.add("on");
  });
}
