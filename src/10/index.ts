

/**
 * infer: 讓 TypeScript 幫我們推導其型別
 * 
 * note:
 * 
 * 1. 只能用在 condition types 的 extends 內, 不能用在限制泛型的 extends
 * 2. 使用 infer R 後，這個被推導出來的型別 R 雖然能夠被當成型別直接回傳，但它只能用在符合 True 的條件使用，不能用在 False 的情
 *  
 */
type InferResponse<T> = T extends { response: infer R; status: number } ? R : T;
type T4 = InferResponse<{ response: { data: 'foobar' }; status: 200 }>; // { data: 'foobar' }
type T5 = InferResponse<{ status: 400 }>; // { status: 400 }

/**
 * ReturnType
 */
type CustomReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type T6 = CustomReturnType<() => number>

/**
 * Parameters
 */
type CustomParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
