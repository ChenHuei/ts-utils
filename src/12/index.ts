/**
 * 
 * 遞迴 (recursion) ??
 * 
 * 
 */

/** 沒有使用 Recursive Type */
type ValueOrArray<T> = T | T[];
let numberArray: ValueOrArray<number> = 0
numberArray = [0, 1, 2]
// error
// numberArray = [0, [1]]

/** 使用 Recursive Type Aliases */
type ValueOrNestedArray<T> = T | ValueOrNestedArray<T>[];
let nestedNumberArray: ValueOrNestedArray<number> = 0
nestedNumberArray = [0, 1, 2]
nestedNumberArray = [0, [1]]
nestedNumberArray = [0, [1, 2, [3]]]

// wow
type SnakeToCamelCase<T extends string> = T extends `${infer Head}_${infer Tail}`
  ? `${Uncapitalize<Head>}${Capitalize<SnakeToCamelCase<Tail>>}`
  : T
type T1 = SnakeToCamelCase<'this_is_snake_case'>; // "thisIsSnakeCase"