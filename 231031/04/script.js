const member = {
  name: `kim`,
  age: 25,
};

// let name = member.name;
// console.log(name);

//객체 축약법
// let { name, age } = member;
// console.log(name01);
// console.log(age);

const student = {
  name01: `아이유`,
  score: {
    history: 85,
    science: 94,
  },
  friends: [`kim`, `lee`, `park`],
};

let {
  name01,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(name01);
console.log(history);
console.log(science);
console.log(f1);
