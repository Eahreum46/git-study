const toggleBtn = document.querySelector(".menu_toggle_btn");
const navigation = document.querySelector(".nav");

// console.log(toggleBtn);
// window에서 ctrl+shift+j 로 null 나오는지 확인

toggleBtn.addEventListener("click", () => {
  console.log("hi");
  navigation.classList.toggle("active");
});
