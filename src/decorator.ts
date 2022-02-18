// function st(target: any, name: any): any {
//   console.log("first");
//   console.log(target);
//   console.log(name);
// }
// class first {
//   @st
//   price = 1;
// }
// const temp1 = new first();

import { toEditorSettings } from "typescript";

// function nd(param: any): any {
//   console.log(param);
//   return function (target: any, name: any): any {
//     console.log(target);
//     console.log(name);
//   };
// }
// class base {
//   base = "base";
// }
// class second extends base {
//   help: string = "help";
//   sayHelp = () => {
//     console.log("help");
//   };
//   @nd("2nd")
//   price = 2;
// }
// const temp2 = new second();

// function decoA(param: number) {
//   console.log("decoA factory");
//   return function (target: any, name: any) {
//     console.log("decyA decorator");
//   };
// }

// function decoB(target: any, name: any) {
//   console.log("decoB decorator");
// }

// function decoC(param: number) {
//   console.log("decoC factory");
//   return function (target: any, name: any) {
//     console.log("decoC decorator");
//   };
// }

// class SomeClass {
//   @decoA(1)
//   @decoB
//   @decoC(2)
//   prop = 1;
// }

// function isInstance(
//   object: any,
//   targetTypeConstructor: new (...args: any[]) => any
// ) {
//   return (
//     targetTypeConstructor &&
//     typeof targetTypeConstructor === "function" &&
//     object instanceof targetTypeConstructor
//   );
// }

// class Jerry {
//   constructor(private name: string) {
//     this.name = name;
//   }
// }

// const jerry: Jerry = new Jerry("Jerry");

// class Test {
//   constructor() {}
// }
// console.log(isInstance(jerry, Test));

// function classD<T extends { length: number }>(obj: T) {
//   console.log(obj.length);
// }
// classD({ length: 3 });

// function classDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     newProperty = "new property";
//     hello = "override";
//   };
// }

// @classDecorator
// class Greeter {
//   property = "property";
//   hello: string;
//   constructor(m: string) {
//     this.hello = m;
//   }
// }
// console.log(new Greeter("world"));

// const dependencyPool = {
//   dep1: { name: "dep1" },
//   dep2: { name: "dep2" },
//   dep3: { name: "dep3" },
//   dep4: { name: "dep4" },
// };
// type testing = "dep1" | "dep2" | "dep3" | "dep4";
// // interface testing {
// //   name: "dep1" | "dep2" | "dep3" | "dep4";
// // }
// console.log({ ...dependencyPool });
// function inject(...depNames: testing[]) {
//   return function <T extends { new (...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       constructor(...args: any[]) {
//         const deps = depNames.reduce(
//           (deps, name) => ({
//             ...deps,
//             [name]: dependencyPool[name],
//           }),
//           {}
//         );

//         super(deps);
//       }
//     };
//   };
// }

// @inject("dep1", "dep2")
// class Product {
//   constructor(deps: any) {
//     console.log("product depencency is\n", deps);
//   }
// }

// function createProduct(...args: any[]) {
//   return new Product(args);
// }

// const p = createProduct();

// class Product {
//   setPrice() {
//     console.log("setPrice");
//   }
// }

// const descriptor = Object.getOwnPropertyDescriptor(
//   Product.prototype,
//   "setPrice"
// );
// console.log(descriptor);
// // {value: ƒ, writable: true, enumerable: false, configurable: true}
// console.log(descriptor.value === Product.prototype.setPrice);
// // true

// function logging(target: any, name: any, descriptor: any) {
//   console.log(target, name);
//   console.log(descriptor);
//   const originMethod = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     const res = originMethod.apply(this, args);
//     console.log(this);
//     console.log(`${name} method arguments: `, args);
//     console.log(`${name} method return: `, res);
//     return res;
//   };
// }
// class Product {
//   price: number = 1000;

//   @logging
//   setPrice(p: number) {
//     this.price = p;
//     console.log(this.price);
//     return this.price;
//   }
// }

// const p = new Product();
// p.setPrice(1000);
// p.setPrice(2000);

function minNumber(min: number) {
  return function decorator(
    target: { validators: {} },
    name: string,
    index: number
  ) {
    console.log(target);
    console.log(name);
    target.validators = {
      minNumber: function (args: number[]) {
        return args[index] >= min;
      },
    };
  };
}

function validate(
  target: { [x: string]: any },
  name: string,
  descriptor: { [x: string]: any }
) {
  const originMethod = target[name];
  descriptor.value = function (...args: any) {
    Object.keys(target.validators).forEach((key) => {
      console.log(key);
      if (!target.validators[key](args)) {
        throw new Error("Not Valid!");
      }
    });
    originMethod.apply(this, args);
  };
}

class Product {
  name: string;
  price: number;
  purchased: number = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  @validate
  public setPrice(@minNumber(2000) price: number) {
    this.price = price;
  }
}

const p1 = new Product("foo", 2000);
p1.setPrice(2000);
p1.setPrice(2001);
//p1.setPrice(1000);
// Uncaught Error: Not Valid!

// function classDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     newProperty = "new property";
//     hello = "override";
//   };
// }

// @classDecorator
// class Greeter {
//   property = "property";
//   hello: string;
//   constructor(m: string) {
//     this.hello = m;
//   }
// }

// console.log(new Greeter("world"));
