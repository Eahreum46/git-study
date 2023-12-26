/*
객체 생성! 지금까지와는 다른 방버븡로 객체를 생성!
생성자 함수 => 객체 생성
- 생성자 함수: 붕어빵 틀을 만들자@
  -객체: 해당 붕어빵 틀을 통해서 => 붕어빵 무한대로 생산가능!
  */

// 객체 생성자 함수 = 붕어빵 틀
function Book(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

let book1 = new Book("자바스크립트", 648, false);
console.log(book1);
