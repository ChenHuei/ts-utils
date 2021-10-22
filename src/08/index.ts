/**
 * 
 * Conditional Types
 * 
 */

/** T[number] = 取出 T 這個陣列型別中元素的所有型別 */
type Flatten<T> = T extends any[] ? T[number] : T

type Fruit = 'apple' | 'banana'
type FruitList = Fruit[]

type FlattenFruit = Flatten<Fruit>
type FlattenFruitList = Flatten<FruitList>


type SomeArray = [string, boolean, number];
type Element0 = SomeArray[0]; // string
type Element1 = SomeArray[1]; // boolean
type Element2 = SomeArray[2]; // number
type Elements = SomeArray[number]; // string | boolean | number