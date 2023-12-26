// 제네릭 타입= 종합병원 개념/ 매우 중요

export const arrayLength = <T>(array: T[]): number => {
  return array.length;
};

export const isEmpty = <T>(array: [T]): boollean => arrayLength<T>(array) == 0;
