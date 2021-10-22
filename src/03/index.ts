/**
 * extends 限制泛型 (Generic Constraints)
 * 
 * A extends ooo 比較好理解的中文應該是「A 需要滿足 ooo」，但更精確的是指「A 是 ooo 的子集合」
 * 
 */


function getFirstElement<T extends string | number>(array: T[]): T {
  return array[0]
}

getFirstElement(['hi', 'hello'])
getFirstElement([1, 2, 3])
// getFirstElement([true, false]) 

interface Person {
  firstName: string;
  lastName: string;
}

function getName<T extends Person>(person: T) {
  return `${person.firstName} ${person.lastName}`;
}

getName({ firstName: 'Chen', lastName: 'Leo', age: 26 })