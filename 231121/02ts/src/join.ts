// join이라는 메서드는 split이랑 반대/ 배열의 아이템으로 구분되어있는 요소들을 하나로 합쳐서 문자열로 만들어주는 메서드

const join = (strArray: string[], delim: string = "") => {
  strArray.join(delim);
};
