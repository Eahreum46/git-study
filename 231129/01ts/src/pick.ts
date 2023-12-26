//객체 혹은 배열에서 특정 인덱스 값을 가지고 있는 속성만 추려서 객체를 만들기

// const obj = {
//   name: "Jane",
//   age: 22,
//   city: "Busan",
//   country: "Korea",
// };

// pick(obj, ["name", "country"]);

// export const pick = (obj, keys) =>
//   keys
//     .map((key) => ({ [key]: obj[key] }))
//     .reduce((result, value) => ({ ...result, ...value }), {});

export const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys
    .map((key) => ({ [key]: obj[key] }))
    .reduce((result, value) => ({ ...result, ...value }), {});
