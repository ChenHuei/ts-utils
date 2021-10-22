/**
 * 
 * Mapped Type
 * 
 */

/** index signatures */
type DeviceDict = {
  [key: string]: string;
};

/** mapped type: 物件的屬性需要 'apple' | 'samsung' | 'google' */
type DeviceMap = {
  [P in 'apple' | 'samsung' | 'google']: string;
};

type SupportedEvent = {
  click: string;
  change: string;
  keyup: string;
  keydown: string;
};

type HandledEvent = {
  [K in keyof SupportedEvent]: () => void;
};