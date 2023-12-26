import { pureDelete } from "pureDelete";

const mixdeArray: ([] | string[] | { name: "Jack" })[] = [
  [],
  { name: "Jack" },
  ["description"],
];

// interface IObject {
//   name: string;
// }

const objectsOnly: object[] = pureDelete(mixdeArray, (val) =>
  Array.isArray(val)
);

console.log(mixdeArray, objectsOnly);
