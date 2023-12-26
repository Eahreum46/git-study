import { pick } from "./pick";

const obj = {
  name: "Jane",
  age: 22,
  city: "Busan",
  country: "Korea",
};

console.log(pick(obj, ["name", "age"]), pick(obj, ["city", "country"]));
