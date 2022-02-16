"use strict";
// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters);
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 45) {
//     console.log("Galloping...");
//     super.move(distanceInMeters);
//   }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
// interface genericiden {
//   <T>(arg: T): T;
// }
// interface genericiden2<T> {
//   (arg: T): T;
// }
// function identity<T>(arg: T): T {
//   return arg;
// }
// function iden<T>(arg: T): T {
//   return arg;
// }
// let myIdn: genericiden = iden;
// let myIdn2: genericiden2<number> = iden;
// //이렇게 하면 인터페이스의 다른 모든 멤버가 타입 매개변수를 볼 수 있습니다.
// class GenericNumber<T> {
//   zeroValue!: T;
//   add!: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) {
//   return x + y;
// };
// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
