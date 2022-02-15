interface User {
  name: string;
  id: number;
}
// const user: User = {
//   username: "Hello",
//   id: 0,
// };

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
  return {
    name: "hello",
    id: 0,
  };
}
function wrapInArray(obj: string | string[]) {
  //union
  if (typeof obj === "string") {
    return [obj];
    //          ^?
  } else {
    return obj;
  }
}
type StringArray = Array<string>; //generic
type ObjectWithNameArray = Array<{ name: string }>;
function deleteUser(user: User) {
  // ...
}
type MyBool = true | false;
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// const Bool: MyBool = "hello";

console.log("1234");
let numArray1: number[] = [1, 2, 3];
let numArray2: Array<number> = [1, 2, 3];

let nameAge: [string, number] = ["john", 10];
//let nameAge: [string, number] = [10,"john"]; 오류
//nameAge[3];

enum Color {
  Red = 0,
  Green,
  Blue,
}
let c: Color = Color.Green;
let notsure: any = "hello";
notsure = 1;
function returnVoid(): void {}
let uorn: undefined | null = undefined; //=null;
function error(message: string): never {
  throw new Error(message);
} //이런 방식으로 에러나, 타입 추론으로 아무것도 얻지 못하는 경우에 never을 얻을 수 있다고 함
// declare function create(o: object | null): void;
// create({ props: 0 });
//object는 number, string, boolean, bigint, symbol, null, undefined가 아닌 나머지

//타입 단언에는 두 가지 형태가 있습니다. 하나는, "angle-bracket" 문법입니다:
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
//다른 하나는 as-문법 입니다.

let strasLength: number = (someValue as string).length;
//위 두 예제는 동일합니다. 어떤 것을 사용할지는 주로 선호에 따른 선택입니다. 하지만 TypeScript를 JSX와 함께 사용할 때는, as-스타일의 단언만 허용됩니다.

interface LabeledValue {
  label: string;
}
// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// } //object 속에 label로 처리할 수 있음
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
  console.dir(labeledObj);
}
let myObj = { size: 10, label: "Size 10 Object" };

printLabel(myObj);
// interface SquareConfig {
//   color?: string;
//   width?: number;
// } //넣어도 외고 안 넣어도 되고
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; //이 방식으로 추가 인자를 받을 수 있음
}
const config: SquareConfig = {
  color: "red",
};
interface ConstInterface {
  readonly x: number;
  readonly y: number;
}
let a: ConstInterface = { x: 3, y: 5 };
//a.x = 1;
let arr: number[] = [1, 2, 3, 4];
let roa: ReadonlyArray<number> = arr;
//roa[1] = 3;
arr = roa as number[];
//변수는 const, property는 readOnly
function createSquare(config: SquareConfig): void {
  console.dir(config);
}
let mySquare = createSquare({ colur: "red", width: 100 });
interface SearchFunc {
  (source: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src) {
  //꼭 이런 식으로 명칭을 같게 하지 않을 방법도 있음. 타입만 봄
  return src.search("1") > -1;
};

interface StrArray {
  [index: number]: string;
}

let myArray: StrArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
//두 타입의 인덱서(indexer)를 모두 지원하는 것은 가능하지만,
//숫자 인덱서에서 반환된 타입은 반드시 문자열 인덱서에서 반환된 타입의 하위 타입(subtype)이어야 합니다.
//이 이유는 number로 인덱싱 할 때, JavaScript는 실제로
//객체를 인덱싱하기 전에 string으로 변환하기 때문입니다.
//즉, 100 (number)로 인덱싱하는 것은 "100" (string)로 인덱싱하는 것과 같기 때문에,
//서로 일관성 있어야 합니다.

class Animal {
  name!: string;
}
class Dog extends Animal {
  breed!: string;
}
// 오류: 숫자형 문자열로 인덱싱을 하면 완전히 다른 타입의 Animal을 얻게 될 것입니다!
interface NotOkay {
  //[x: number]: Animal;
  [x: string]: Dog;
}
interface NumberDictionary {
  [index: string]: number;
  length: number; // 성공, length는 숫자입니다
  //name: string;      // 오류, `name`의 타입은 인덱서의 하위타입이 아닙니다
}
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date): void {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
// interface ClockCon {
//   new (hour: number, minute: number): { tick(): void };
// }

// class Cl implements ClockCon {
//   constructor(h: number, m: number) {
//   }
// }

interface ClockCon {
  new (hour: number, minute: number): ClockInt;
}
interface ClockInt {
  tick(): void;
}
function createClock(ctor: ClockCon, hour: number, minute: number): ClockInt {
  return new ctor(hour, minute);
}
class DigitalClock implements ClockInt {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInt {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//이게 더 간단하다고 하는데 과연...?
interface ClockConstructor {
  new (hour: number, minute: number): any;
}

interface CInt {
  tick(): void;
}

const Cloc: ClockConstructor = class Clock implements CInt {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};
