const userDataList = [
  { id: 123, name: "아이유" },
  { id: 456, name: "태연" },
  { id: 789, name: "조인성" },
];

const searchWordInput = document.querySelector("#search-id-input");
const searchResult = document.querySelector("#search-result");

const FindUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);
  if (targetData === null) {
    searchResult.innerText = "유저 검색 결과 없음";
    return;
  }
  searchResult.innerText = targetData.name;
};

searchIdInput.addEventListener("keyup", (e) => {
  const searchId = Number(e.target.value);
  findUser(searchId);
});
