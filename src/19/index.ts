/**
 * 
 * 泛型參數預設值 (Generic parameter defaults)
 * 
 */

type Optional<T extends object, K extends keyof T = keyof T> =
  Omit<T, K> & Partial<Pick<T, K>>

type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  website: string;
};

type ConferenceWithOptional = Optional<Conference, 'year' | 'isAddToCalendar'>
type ConferenceWithAllOptional = Optional<Conference>