/**
 * 
 * Utility Types
 * 
 * \以「型別」作為 input，並且以另一個「型別」作為 output
 * 也就是說，透過 Utility Types 將可以「根據一個型別，來建立出另一個型別」
 * 
 */


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

/** PickRename */
type PickRename<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & { [P in R]: T[K] };

const renameProduct: PickRename<Product, 'name', 'rename'> = {
  rename: '',
  description: '',
  quantity: 0,
  isDisabled: false
}