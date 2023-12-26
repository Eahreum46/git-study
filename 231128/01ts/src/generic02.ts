type MapFunc<T, P> = (arg0: T) => R;
type IdentityFunc<T> = MapFunc<T, T>;

const numberIdentity: IdentityFunc<number> = (x: number): number => x;
const stringIdentity: IdentityFunc<string> = (x: string): string => x;
