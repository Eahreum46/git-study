$(".navi li").mouseenter(function () {
  let changeImage = $(this).attr("data-image");
  $(".phpto").css({ background: `url(${changeImage})` });
});

$(".navi li").mouseleave(function () {
  $(".photo").css({ background: "" });
});
