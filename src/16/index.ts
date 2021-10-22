/**
 * 
 * Property Modifiers
 * 
 */

/** 把每個物件內的屬性都變 optional, equal to Partial */
type ToOptionalProperty<T> = {
  [K in keyof T]?: T[K]
}

type CustomPartial<T> = {
  [P in keyof T]?: T[P];
};

/** 把每個物件內的屬性都變 required, equal to Required */
type ToRequiredProperty<T> = {
  [K in keyof T]-?: T[K]
}

type CustomRequired<T> = {
  [P in keyof T]-?: T[P];
}

interface Person {
  firstName: string;
  lastName?: string; // lastName is optional
  readonly age: number; // you should not mutate the age
}

type PersonWithOptionalProps = ToOptionalProperty<Person>;
type PersonWithRequiredProps = ToRequiredProperty<Person>;

/** readonly equal to Readonly */
type ToReadOnlyProperty<T> = {
  readonly [K in keyof T]: T[K]
}

type CustomReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type RemoveReadOnlyProperty<T> = {
  -readonly [K in keyof T]: T[K]
}

type PersonWithReadonlyProps = ToReadOnlyProperty<Person>;
type PersonWithoutReadonlyProps = RemoveReadOnlyProperty<Person>;