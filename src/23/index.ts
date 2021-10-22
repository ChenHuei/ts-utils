/**
 * 
 * enum
 * 
 */

enum GENDER {
  MALE = 'male',
  FEMALE = 'female'
}

type T1 = GENDER extends string ? true : false; // true
type T2 = string extends GENDER ? true : false; // false
type T3 = string extends GENDER.MALE ? true : false; // false
type T4 = 'male' extends GENDER ? true : false; // false
type T5 = 'male' extends GENDER.MALE ? true : false; // false
type T6 = GENDER.MALE extends GENDER ? true : false; // true
type T7 = GENDER.MALE extends string ? true : false; // true
type T8 = GENDER extends GENDER.MALE ? true : false; // false

enum NUMERIC_GENDER {
  MALE,
  FEMALE,
}

type T11 = NUMERIC_GENDER extends number ? true : false; // true
type T12 = number extends NUMERIC_GENDER ? true : false; // true
type T13 = number extends NUMERIC_GENDER.MALE ? true : false; // true
type T14 = 10 extends NUMERIC_GENDER ? true : false; // true
type T15 = 10 extends NUMERIC_GENDER.MALE ? true : false; // true
type T16 = NUMERIC_GENDER.MALE extends NUMERIC_GENDER ? true : false; // true
type T17 = NUMERIC_GENDER.MALE extends number ? true : false; // true
type T18 = NUMERIC_GENDER extends NUMERIC_GENDER.MALE ? true : false; // false
type T19 = NUMERIC_GENDER.MALE extends NUMERIC_GENDER.FEMALE ? true : false; // false
