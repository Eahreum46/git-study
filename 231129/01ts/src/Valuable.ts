import { IValuable } from "./IValuable";

export { IValuable } from "./IValuable";

export class valuable<T> implements IValuable<T> {
  constructor(public value);
}
