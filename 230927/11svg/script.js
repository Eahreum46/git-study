$(document).ready(function () {
  function randomColor() {
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  let canvas = document.getElementById("map_image");
  // console.log(canvas); 연결 잘 됐는지 개발자도구에서 확인
  let paper = Raphael(canvas, 500, 716);

  $.each(koreaMapPathData, function (index, item) {
    let path = paper.path(item["d"]);
    path.attr("stroke", item["stroke"]);
    if (item["fill"] != "none") {
      path.attr("fill", randomColor());
    }
  });
});
