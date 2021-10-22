/**
 * 
 * Mapped Type 中使用 Template Literal 來改物件型別中的所有 key
 * 
 */

type SupportedEvent = {
  click: string;
  change: string;
  keyup: string;
  keydown: string;
};

type MappedValuesToFunction<T> = {
  [K in keyof T]: () => void;
};
type HandledEvent = MappedValuesToFunction<SupportedEvent>;

/** 透過 as 後面接字串型別的方式，就可以讓我們達到修改屬性 key 的目的  */
type ToEventHandler<T> = {
  [K in keyof T as `handle${Capitalize<string & K>}`]: T[K]
}
type EventHandler = ToEventHandler<HandledEvent>