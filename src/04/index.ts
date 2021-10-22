/**
 * keyof 取出物件型別的 key
 *  
 */

type Person = {
  firsName: string;
  lastName: string;
};

type PersonKey = keyof Person; // "firsName" | "lastName"

/**
 * 小知識：any 的 keyof 是？
 */

type KeyOfAny = keyof any; // string | number | symbol