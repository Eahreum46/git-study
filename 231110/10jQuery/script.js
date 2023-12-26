$(function () {
  let srcVal = $("#sec_1 img").attr("src");
  console.log(srcVal);

  $("#sec_1 img").attr({
    src: srcVal.replace("images.jpg", "TY_images.jpg"),
    width: 200,
  });
});
