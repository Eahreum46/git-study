//JS에서 split 메서드 = 문자열을 배열로 변환(*간주)
//어느 구분 영역에서 해당 아이템을 잘라서 배열의 독립 요소로 간주하게 할것인가를 정의.
//구분자!
//merry christ mas => ["merry", "christ", "mas"]

export const split = (str: string, delim: string) => {
  str.split(delim);
};
