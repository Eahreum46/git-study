//제이쿼리 배열 관련 메서드
/*
1) $(요소선택자).each()/ $each($("요소선택자"), function()) : 배열에 저장된
문서 아이템만큼 메서드를 반복 실행시킬 때 사용하는 메서드

2) $.map(): 배열에 저장된 아이템만큼 메서드를 반복실행 후 해당 결과물을 새로운 배열에 순서대로 재저장하는 메서드

3) $.grep(배열, 콜백함수): 배열에 저장된 아이템만큼 메서드를 반복실행 후 반환값이 콜백함수의 조건식에 true인 경우에만
데이터로 저장할 때 사용하는 메서드
** map/grep 결과값은 같으나 보통 map을 더 많이 씀.

4) $.inArray(찾을 데이터, 배열, 찾고자하는 인덱스순서): 특정 배열안에서 데이터를 찾을 때 사용하는 메서드

5)$.merge(Array1, Array2): 매개변수 안에 포함된 2개의 배열을 하나로 합칠 때 사용하는 메서드

6) $("요소선택자").index("찾고자하는 요소선택자"): 부모요소 선택자에서 찾고자하는 요소 선택자의 인덱스 정보를 가져오고자 할 때!

*/

$(function () {
  let obj = [{ area: "서울" }, { area: "부산" }, { area: "전주" }];

  $(obj).each(function (i, o) {
    console.log(i + " :", o);
  });

  $.each($("#menu2 li"), function (i, o) {
    console.log(i + " :", o);
  });
});
