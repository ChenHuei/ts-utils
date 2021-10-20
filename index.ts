type OrNull<T> = T | null

let two: OrNull<number> = null
two = 2 