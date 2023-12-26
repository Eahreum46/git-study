//anime.js는 stagger
//delay를 보다 효과적으로 사용할 수 있도록 도와주는 역할!!

const path = anime.path(".svg path");

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 10000,
  loop: true,
});
