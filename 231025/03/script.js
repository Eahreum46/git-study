/* const totalPeople = document.querySelector("#seed")
const randomPeople = document.querySelector("#total")
const raffle = document.querySelector("#raffle")
const clear = document.querySelector("#clear")

raffle.onload = function () {
  const bgCount = totalPeople;
  let randomPeople = Math.random() * bgCount + 1;

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const birthDay = new Date(
      totalPeople.value,
      randomPeople.value
    );

  result.innerText = `${totalPeople}명 중에 ${randomPeople}명 뽑기`;
};
*/

const seed = document.querySelector("#seed");
const total = document.querySelector("#total");
const raffle = document.querySelector("#raffle");
const result = document.querySelector("#result");

raffle.addEventListener("click", (e) => {
  e.preventDefault();
  let winner = "";
  for (let i = 0; i < total; i++) {
    let picked = Math.floor(Math.random() * seed.value) + 1;
    winner += `${picked}번, `;
  }
  result.innerText = `선발된 팀원: ${winner}`;
});
