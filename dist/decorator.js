"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var dependencyPool = {
    dep1: { name: "dep1" },
    dep2: { name: "dep2" },
    dep3: { name: "dep3" },
    dep4: { name: "dep4" },
};
var a = "hello world";
function inject() {
    var depNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        depNames[_i] = arguments[_i];
    }
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = this;
                var deps = depNames.reduce(function (deps, name) {
                    var _a;
                    return (__assign(__assign({}, deps), (_a = {}, _a[name] = dependencyPool[name], _a)));
                }, {});
                _this = _super.call(this, deps) || this;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var Product = /** @class */ (function () {
    function Product(deps) {
        console.log("product depencency is", deps);
    }
    Product = __decorate([
        inject("dep1", "dep2")
    ], Product);
    return Product;
}());
function createProduct() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new Product(args);
}
var p = createProduct();
