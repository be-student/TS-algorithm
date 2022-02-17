// function extend<
//   First extends { hasOwnProperty: (obj: any) => Boolean },
//   Second extends { hasOwnProperty: any }
// >(first: First, second: Second): First & Second {
//   const result: Partial<First & Second> = {};
//   for (const prop in first) {
//     if (first.hasOwnProperty(prop)) {
//       (result as unknown as First)[prop] = first[prop];
//     }
//   }
//   for (const prop in second) {
//     if (second.hasOwnProperty(prop)) {
//       (result as any as Second)[prop] = second[prop];
//     }
//   }
//   return result as First & Second;
// }

// class Person {
//   constructor(public name: string) {}
// }

// interface Loggable {
//   log(name: string): void;
// }

// class ConsoleLogger implements Loggable {
//   log(name: string) {
//     console.log(`Hello, I'm ${name}.`);
//   }
// }
// console.dir(ConsoleLogger.prototype);
// const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
// jim.log(jim.name);

// interface Fish {
//   swim: () => void;
// }
// interface Bird {
//   fly: () => void;
// }
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }
// let pet = { swim: () => console.log("swim") };
// if (isFish(pet)) {
//   pet.swim();
// }

// function move(pet: Fish | Bird) {
//   if ("swim" in pet) {
//     return pet.swim();
//   }
//   return pet.fly();
// }

// interface Padder {
//   getPaddingString(): string;
// }
// class SpaceRepeatingPadder implements Padder {
//   constructor(private numSpaces: number) {}
//   getPaddingString() {
//     return Array(this.numSpaces + 1).join(" ");
//   }
// }
// class StringPadder implements Padder {
//   constructor(private value: string) {}
//   getPaddingString() {
//     return this.value;
//   }
// }
// function getRandomPadder() {
//   return Math.random() < 0.5
//     ? new SpaceRepeatingPadder(4)
//     : new StringPadder("  ");
// }

// // 타입은 'SpaceRepeatingPadder | StringPadder' 입니다
// let padder: Padder = getRandomPadder();

// if (padder instanceof SpaceRepeatingPadder) {
//   padder; // 타입은 'SpaceRepeatingPadder'으로 좁혀집니다
// }
// if (padder instanceof StringPadder) {
//   padder; // 타입은 'StringPadder'으로 좁혀집니다
// }

// // function f(sn: string | null): string {
// //   if (sn == null) {
// //     return "default";
// //   } else {
// //     return sn;
// //   }
// // }
// function f(sn: string | null): string {
//   return sn || "default";
// }
// function broken(name: string | null): string {
//   function postfix(epithet: string) {
//     return name.charAt(0) + ".  the " + epithet; // 오류, 'name'은 아마도 null 입니다
//   }
//   name = name || "Bob";
//   return postfix("great");
// }

// function fixed(name: string | null): string {
//   function postfix(epithet: string) {
//     return name!.charAt(0) + ".  the " + epithet; // 성공
//   }
//   name = name || "Bob";
//   return postfix("great");
// }
// type LinkedList<T> = T & { next: LinkedList<T> };

// interface Person {
//   name: string;
// }

// var people: LinkedList<Person>;
// var s = people.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;
// interface Square {
//   kind: "square";
//   size: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }
// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// interface Triangle {
//   kind: "trinangle";
//   width: number;
//   height: number;
// }
// type Shape = Square | Rectangle | Circle | Triangle;
// function assertNever(x: never): never {
//   throw new Error("unexpected Object " + x);
// }
// function area(s: Shape) {
//   switch (s.kind) {
//     case "square":
//       return s.size * s.size;
//     case "rectangle":
//       return s.height * s.width;
//     case "circle":
//       return Math.PI * s.radius ** 2;
//     default:
//       return assertNever(s); // 빠진 케이스가 있다면 여기서 오류 발생
//   }
// }
// type Readonlyy<T> = {
//   readonly [P in keyof T]: T[P];
// };
// type Partiall<T> = {
//   [P in keyof T]?: T[P];
// };
// // Use this:
// type PartialWithNewMember<T> = {
//     [P in keyof T]?: T[P];
//   } & { newMember: boolean }

//   // 다음을 사용하지 **마세요**!
//   // 오류입니다!
//   type PartialWithNewMember<T> = {
//     [P in keyof T]?: T[P];
//     //newMember: boolean;
//   }
// interface func {
//   get(animal: number): number;
// }
// class ani implements func {
//   get(animal: number): number {
//     return animal;
//   }
// }
