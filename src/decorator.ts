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

const dependencyPool = {
  dep1: { name: "dep1" },
  dep2: { name: "dep2" },
  dep3: { name: "dep3" },
  dep4: { name: "dep4" },
};
type testing = "dep1" | "dep2" | "dep3" | "dep4";
// interface testing {
//   name: "dep1" | "dep2" | "dep3" | "dep4";
// }
function inject(...depNames: any[]) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        const deps = depNames.reduce(
          (deps, name: testing) => ({
            ...deps,
            [name]: dependencyPool[name],
          }),
          {}
        );

        super(deps);
      }
    };
  };
}

@inject("dep1", "dep2")
class Product {
  constructor(deps: any) {
    console.log("product depencency is", deps);
  }
}

function createProduct(...args: any[]) {
  return new Product(args);
}

const p = createProduct();
