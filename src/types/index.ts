export * from "./api";
export * from "./settings";

export interface IDynamicKey<T> {
  [key: string]: T;
}
