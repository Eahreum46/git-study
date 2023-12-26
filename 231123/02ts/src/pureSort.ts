//sort 함수를 순수함수로 구현!

export const pureSort = <T>(array: T[]): readonly T[] => {
  let deepCopied = [...array];
  return deepCopied.sort();
};
