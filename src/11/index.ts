/**
 * 
 * Template Literal Types
 * 
 */

/** 直接用字串來定義型別的方式稱作 String Literal Types */
type Occupation = 'Web Developer';
type Content = `Hello, I am a ${Occupation}.`; // "Hello, I am a Web Developer."

/** combination with 聯集 (union) */
type HandledEvent = 'Change' | 'Click' | 'Keydown';
type EventHandler = `on${HandledEvent}`; //  "onChange" | "onClick" | "onKeydown"

/** 將 enum 的 values 變成 Union Type */
enum MANUFACTURE {
  APPLE = 'apple',
  SAMSUNG = 'samsung',
  GOOGLE = 'google',
  SONY = 'sony',
}
type Manufacture = `${MANUFACTURE}`; // "apple" | "samsung" | "google" | "sony"