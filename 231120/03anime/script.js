anime({
  targets: ".svg1 path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 10000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});
