/**
 * 
 * 實戰
 * 
 * 1. 泛型（generics）的使用
 * 2. 使用 extends 限制泛型
 * 3. keyof 的使用
 * 4. Indexed Access Types 的使用
 * 
 */

function getObjValue<T, U extends keyof T>(obj: T, key: U): T[U] {
  return obj[key]
}

const me = {
  firstName: 'Chen',
  lastName: 'Leo'
}

const value = getObjValue(me, 'lastName') // Leo