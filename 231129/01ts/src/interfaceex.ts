//any & 합집합

export interface ISquare {
  size: number;
}
export interface Irectangle {
  width: number;
  height: number;
}
export interface Icircle {
  radius: number;
}

// const square: ISquare = {
//   size: 10,
// };
// const rectangle: Irectangle = {
//   width: 4,
//   height: 5,
// };
// const circle: Icircle = {
//   radius: 10,
// };

export type IShape = ISquare | Irectangle | Icircle;
