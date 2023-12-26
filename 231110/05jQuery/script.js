$(function () {
  $("wrap p:hidden").css({
    display: "block",
    background: "#ffo",
  });

  let z1 = $("#zone1 :selected").val(0);
  console.log(z1);

  let z2 = $("#zone2 :selected").val(0);
  console.log(z2);

  let z3 = $("#zone3 :selected").val(0);
  console.log(z3);
});
