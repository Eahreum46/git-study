const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").value;
  let count = word.length;
  XPathResult.innerText = `${count}`;
});
