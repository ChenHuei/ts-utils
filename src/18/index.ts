/**
 * 
 * Omit
 * 
 */

/** K extends keyof any, 確保 K 一定可以被放入 Mapped Type */
type CustomOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

type Test = CustomOmit<Person, 'age'>