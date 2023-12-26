export const mergeArray = <T>(...arrays: T[][]): T[] => {
  //T[][] = 복수의 배열
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    let array: T[] = arrays[i];
    result = [...result, ...array];
  }
  return result;
};
