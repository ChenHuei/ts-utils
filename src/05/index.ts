/**
 * 
 * 如何取出物件型別中屬性"值"的型別
 * 
 */

type Person = {
  firsName: string;
  lastName: string;
  age: number;
};

/** 透過 Object 的 Index 來取得其型別的方式，稱作 Indexed Access Type */
type AgeOfPerson = Person['age'] // number

/** 要如何取出所有物件型別的屬性值呢 */
type ValueOfPerson = Person[keyof Person] // string | number