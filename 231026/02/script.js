// class 생성자 함수

/*

1)생성자 함수
class book(){
  constructur(a,b,c)
  this.a = a;
  this.b = b;
  this.c = c;
}

2)프로토타입 객체 생성
=> Book이라는 프로토타입의 객체가 생성된다.

3)해당 프로토타입의 객체를 활용해서 instance객체를 생성!
=> let contents = new Book()

*/
/*
class Book {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function () {
      this.done === false ? (str = "읽는 중") : (str = "완독");
      teturn = str;
    };
  }
}

const book1 = new Book("자바스크립트", 648, false);
console.log(book1);
*/

class Book {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
}

// function Book(title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
// }

Book.prototype.finish = function () {
  this.done = false ? (str = "읽는 중") : (str = "완독");
  teturn = str;
};

const book1 = new Book("자바스크립트", 648, false);
console.log(book1);
