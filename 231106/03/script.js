// getCurrentPosution: 사용자의 현재 위치를 추척해주는 메서드(함수)
// watchPosition: 지정한 시간마다 위치 확인해주는 메서드
// clearWatch: 위치파악을 요청했으나, 특정 시간이 지나면 위치파악을 멈추게 하는 메서드

let showPosition = (position) => {
  document.querySelector("#result").innerHTML = `
  <b>위도 : </b> ${position.coords.latitude.toFixed(
    2
  )} <b>경도 : </b> ${position.coords.longitude.toFixed(2)}
  `;
};

let errorPosition = (err) => {
  alert(err.message);
};

// const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.getLocation.getCurrentPosution(showPosition, errorPosition);
  } else {
    alert("지오로케이션을 지원하지 않습니다.");
  }
});
