
/**
 * OrNull
 */
type OrNull<T> = T | null

let two: OrNull<number> = null
two = 2 

/**
 * OneOrMany
 */
type OneOrMany<T> = T | T[];
let category: OneOrMany<string> = 'cloth'
category = ['cloth', 'other']

/**
 * Values
 */
type Values<T> = T[keyof T]

type Product = {
  name: string
  description: string
  quantity: number
  isDisabled: boolean
}

type ValuesOfProduct = Values<Product> // string | number | boolean

/**
 * PickObj
 */
type PickObj<T, U extends keyof T> = T[U]

type Name = PickObj<Product, 'name'> // string

/**
 * Flatten 
 */
type Flatten<T> = T extends any[] ? T[number] : T

type Fruit = 'apple' | 'banana'
type FruitList = Fruit[]

type FlattenFruit = Flatten<Fruit>
type FlattenFruitList = Flatten<FruitList>

