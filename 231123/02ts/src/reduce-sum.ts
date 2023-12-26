// reduce: 누산기 = 누적계산기!

import { range } from "./range";
let reduceSum: number = range(1, 101).reduce(
  (result: number, val: number) => result + val,
  0
);
console.log(reduceSum);
//배열과 배열을 더해서 더이상 배열이 아니게 됨 => 타입변환!
