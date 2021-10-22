/**
 * 
 * Pick & Record
 * 
 */


type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P];
};


type CustomRecord<K extends keyof any, T> = {
  [P in K]: T;
};