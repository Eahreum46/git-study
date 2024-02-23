// let obj = new Object();
// let arr = new Array();
// console.log(typeof arr);

// let arrTest = [1, 2, 3];
// console.log(arrTest);

//생성자 함수 혹은 클래스를 활용해서 프로토타입 형태의 객체를 생성하고 , 해당 객체의 형태를 활용해서 또 다른 객체를 만들게되면 해당 객체를 인스턴스 객체!

//생성자함수 || 클래스 => 프로토타입 형태의 객체 => 인스턴스 객체

// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };

// const book1 = new Book("자바스크립트", 648, false);
// console.log(book1);

// Object > constructure[prototype]  > Book() 함수 > book1

//이미 생성자 함수를 통해 생성된 객체 내 메서드 함수를 추가하는 방법
// function Book(title, price) {
//   this.title = title;
//   this.price = price;
// }

// Book.prototype.buy = function () {
//   console.log(`${this.title}을 ${this.price}원에 구매하였습니다!`);
// };

// const book1 = new Book("ABCDE", 10000);
// console.log(book1.buy());

// function TextBook(title, price, major) {
//   Book.call(this, title, price);
//   this.major = major;
// }
// TextBook.prototype.buyTextBook = function () {
//   console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
// };

// Object.setPrototypeOf(TextBook.prototype, Book.prototype);

// const book2 = new TextBook("타입스크립트", 5000, "컴퓨터공학");
// console.log(book2);

// console.log(book2.buyTextBook());
// console.log(book2.buy());

//생성자 함수 || class 객체!!

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자료구조", 15000);
console.log(book1.buy());

class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major}전공서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextBookC("인공지능", 5000, "컴퓨터공학");
console.log(book2.buyTextbook());
console.log(book2.buy());
