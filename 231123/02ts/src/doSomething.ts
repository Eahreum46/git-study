import { ResultType } from "./ResultType";

export const doSomething = (): ResultType => {
  try {
    throw new Error("some error occurs...");
  } catch (e) {
    return [false, e.message];
  }
};
