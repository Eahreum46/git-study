Promise.resolve(1).then((vlaue) => console.log(vlaue));
Promise.resolve("hello").then((vlaue) => console.log(vlaue));

const array = [1, 2, 3];
Promise.resolve(array).then((value) => console.log(value));
