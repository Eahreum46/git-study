const balloon = document.querySelector("#balloon");
const paragraph = document.querySelector(".paragraph");
console.log(paragraph);

//우리가 썼던 이벤트 => click, change, mouse, key 등이 대부분

paragraph.addEventListener("selectstart", () => {
  paragraph.addEventListener(
    "mouseup",
    (event) => {
      const selectionCharacters = window.getSelection().toString();

      const removePopup = () => {
        balloon.classList.remove("on");
      };
      balloon.addEventListener("click", removePopup);

      if (selectionCharacters.length > 0) {
        balloon.innerText = selectionCharacters;
        balloon.classList.add("on");
        balloon.style.left = `${event.clientX - balloon.clientWidth}px`;
        balloon.style.top = `${event.clientY - balloon.clientHeight * 2}px`;
      } else {
        removePopup();
      }
    },
    {
      once: true,
    }
  );
});
