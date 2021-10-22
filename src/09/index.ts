
/**
 * Extract
 * 
 * question:
 * type T1 = CustomExtract<'a' | 'b' | 'c', 'a'>; //  'a'
 * 為何 'a' | 'b' | 'c' extends 'a' 不是會傳 'a' | 'b' | 'c' ??
 * 
 * answer:
 * 因為 Conditional Types 的分配律 (Distributive Conditional Types), 
 * 因此可將它拆解成 type T1 = CustomExtract<'a', 'a'> | CustomExtract<'b', 'a'> | CustomExtract<'c', 'a'>; 
 * 所以 type T1 =  'a'
 * 
 * 
 * note:
 * 如果不要使用分配律可用 [] 達成
 * 
 * type NoExtract<T, U> = [T] extends [U] ? T : never;
 * type T2 = NoExtract<'a' | 'b', 'a' | 'c'>; // never
 * 
 */
type CustomExtract<T, U> = T extends U ? T : never
type T1 = CustomExtract<'a' | 'b' | 'c', 'a'>; //  'a'


type NoExtract<T, U> = [T] extends [U] ? T : never;
type T2 = NoExtract<'a' | 'b' | 'c', 'a' | 'c'>; // never

/**
 * Exclude
 * 
 * type T3 =
  | Exclude<'a', 'a' | 'f'>
  | Exclude<'b', 'a' | 'f'>
  | Exclude<'c', 'a' | 'f'>;
 *
 */
type CustomExclude<T, U> = T extends U ? never : T
type T3 = Exclude<'a' | 'b' | 'c', 'a' | 'f'>; // 'b' | 'c


/**
 * NonNullable
 */
type CustomNonNullable<T> = T extends null | undefined ? never : T
