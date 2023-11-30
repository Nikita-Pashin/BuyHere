export type AnyFunctional = (...args: any[]) => any;
export type ComponentWithClassNameProp = { className?: string };
export type Optional<T> = {
  [P in keyof T]?: T[P]
};
