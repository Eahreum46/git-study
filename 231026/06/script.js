const string = prompt("문자열을 입력해주세요");
const letter = prompt("어떤 문자를 체크하시겠습니까?");

let counting = (str, ch) => {
  let count = 0;

  for (let i = 0; i < str.lenght; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }

  return count;
};

const result = counting(string, letter);
console.log(`${string}에는 ${letter}가 ${result}가 있습니다.`);
