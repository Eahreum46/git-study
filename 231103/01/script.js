/*
Jop Positioning 11월 중순까지 정해야 함
디자이너/프론트엔드/웹퍼블리셔(과거엔 아니었으나 요즘엔 퍼블리셔가 비동기처리 방식까지 꿰고 옴..)
//지금 이 시점부터 배울 영역은 명확하게 FE(*필수)
*/

/*
JS => 싱글 스레드 방식 = 단일 스레드(*방향 혹은 길) 언어
JS 어떠한 명령 실행 완료 => 다음 단계!
1(*복잡한 연산) => 2(*단순한 연산) => 3(*단순한 연산) =>

완화하기 위해서 명령체계 발생 : 비동기처리 방식 언어!
왜 지금 시점에서 배우는가?
http 웹 프로토콜 이전에 배웠던 JS : 내부 로컬컴퓨터 자체에서 
명령어를 실행시키고 처리하는 문법
클라이언트, 서버, AJAX, Json (*외부 API로부터 데이터를 가져와야하는
문법을 어제부터 배우기 시작했다.)
*/

//JS의 동기처리방식 어떻게 이루어지는가

const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  setTimeout(() => {
    console.log("B");
  }, 2000);
  callback();
};
//콜백함수를 주면 B,C를 같이 처리할 수 있음= A-C-B
//하지만 그 와중에도 순차적으로 처리하고싶다면? + callback();

const displayC = () => {
  console.log("C");
};

// displayA();
// displayB();
// displayC();

//B,C를 동시에 순차적으로 처리하려면, callback(); 추가 후
displayA();
displayB(displayC);

//그렇다면, JS에서 비동기처리 방식이 지금까지 봐 온 Callback 함수 말고는 없나요?
//2015년 전까진 Y / 2015년 JS 대개혁의 해! ES6문법 =? + Promise / async & awit
//구글 크롬 => 검색엔진 V9 => 워낙 JS paring 속도 능력이 워낙 뛰어났다!
//개발자들이 JS를 웹브라우저 안에서만 사용하기가 너무 아깝다
//Node.js => JS 런타임(*환경)
//그동안 기존 Backend 개발자들의 전유물 (*서버 구축, 관리하던 JAVA, C++)
//굳이 사용하지 않아도 Node.js 기반에서 JS만으로도 충분히 서버 구축하고 관리할 수 있는 시대!
//프론트엔드개발자 웹 브라우저 화면에서 전개되는 역동적인 페이지구성만 했다면,
//회사,기업 입장에선 프론트엔드개발자가 Node.js를 할 수 있다면 비싼 백엔드개발자 안쓰고 프론트엔드개발자씀
//도미노... => 웹퍼블리셔 입지 약해짐/
//그래서 기존의 프론트엔드 개발자들의 기술 - 리액트&제이쿼리 하드코딩을 배우기 시작-
//...백엔드 긴장 => 노드, 플러터 => 글로벌 UI 프레임워크 배우기 시작
//그래서 풀스택이 나옴(*프론트+백)
//경계선 5~7년차 (*대부분 UI/서버 다 할줄알아)
//퍼블리셔에게 그래서 프론트엔드 영역까지 가르침/무조건- 그래야 경쟁력이 있음.

//콜백함수를 활용한 비동기처리 예문!!

const order = (coffee, callback) => {
  console.log(`${coffee} 커피 주문접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

const display = (result) => {
  console.log(`${result} 준비 완료!`);
};

order("아메리카노", display);

//JS 콜백함수를 활용한 비동기처리방식의 취약점!!
//JS 콜백지옥

const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();
