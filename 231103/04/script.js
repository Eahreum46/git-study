// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("피자 도우 준비");
//     callback();
//   }, 2000);
// };

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("피자 토핑 완료");
//     callback();
//   }, 2000);
// };

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("피자 굽기 완료");
//     callback();
//   }, 2000);
// };

// console.log("피자를 주문합니다");
// step1(function () {
//   step2(function () {
//     step3(function () {
//       console.log("피자가 준비되었습니다!");
//     });
//   });
// });

// 프로미스 객체로 변경한다면

// let Pizza = true;

const pizza = () => {
  return new promise((resolve, reject) => {
    resolve("피자를 주문합니다!");
  });
};

const step1 = (message) => {
  console.log(message);
  return new promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 토핑 완료");
    }, 3000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 굽기 완료");
    }, 3000);
  });
};

pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => console.log("피자가 준비가 되었습니다."));
