$(".testmonial-pic img").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".testmonial .content").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");
});
