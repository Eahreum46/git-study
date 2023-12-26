// 카카오 맵을 활용해서 우리의 위치를 파악해보자!
// 카카오 맵을 활용해서 전국에 존재하는 캄핑장을 마커로 찍어보자
// https://github.com/public-apis/public-apis
// https://developers.kakao.com/

const lat = 37.5025398;
const lng = 127.0248679;

let mapContainer = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
let mapOptions = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

let positions = [
  {
    title: "이젠아카데미 강남",
    latlng: new kakao.maps.LatLng(37.5025398, 127.0248679),
  },
];
let positions = [
  {
    title: "그린컴퓨터",
    latlng: new kakao.maps.LatLng(37.5025398, 127.0248679),
  },
];
let positions = [
  {
    title: "하이미디어",
    latlng: new kakao.maps.LatLng(37.5025398, 127.0248679),
  },
];
let positions = [
  {
    title: "코리아IT",
    latlng: new kakao.maps.LatLng(37.5025398, 127.0248679),
  },
];

for (let i = 0; i < positions.length; i++) {
  let marker = new kakao.Marker({
    map: map,
    position: positions[i].latlng,
  });
  let infowindow = new kakao.maps.InfoWindow({
    content: positions[i].title,
  });

  const makeOverListener = (map, marker, infowindow) => {
    return () => {
      infowindow.open(map, marker);
    };
  };
  const makeOutListener = (infowindow) => {
    return () => {
      infowindow.close();
    };
  };
  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );
  kakao.maps.event.addListener(
    marker,
    "mouseout",
    makeOverListener(infowindow)
  );
}
