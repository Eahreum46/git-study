const twBtn = document.querySelector("#tweetButton");
const twArea = document.querySelector("#tweetTextArea");

twBtn.addEventListener("click", () => {
  const twText = twArea.value;
  const encodedText = encodeURIComponent(twText);
  const tweetURL = `http://tweeter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});

// 디코딩 : 코드화 되어 있는 것을 해석할 때 사용하는 용어
// 인코딩 : 일반 문자열로 되어 있는 것을 코드화로 전환시킬 때 사용하는 용어
// 일반적으로 상단 주소창에 입력되는 파라미터 및 쿼리스트링 값을 코드화
