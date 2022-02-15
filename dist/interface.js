"use strict";
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
// const user: User = {
//   username: "Hello",
//   id: 0,
// };
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
function getAdminUser() {
    return {
        name: "hello",
        id: 0,
    };
}
function wrapInArray(obj) {
    //union
    if (typeof obj === "string") {
        return [obj];
        //          ^?
    }
    else {
        return obj;
    }
}
function deleteUser(user) {
    // ...
}
// const Bool: MyBool = "hello";
console.log("1234");
var numArray1 = [1, 2, 3];
var numArray2 = [1, 2, 3];
var nameAge = ["john", 10];
//let nameAge: [string, number] = [10,"john"]; 오류
//nameAge[3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notsure = "hello";
notsure = 1;
function returnVoid() { }
var uorn = undefined; //=null;
function error(message) {
    throw new Error(message);
} //이런 방식으로 에러나, 타입 추론으로 아무것도 얻지 못하는 경우에 never을 얻을 수 있다고 함
// declare function create(o: object | null): void;
// create({ props: 0 });
//object는 number, string, boolean, bigint, symbol, null, undefined가 아닌 나머지
//타입 단언에는 두 가지 형태가 있습니다. 하나는, "angle-bracket" 문법입니다:
var someValue = "this is a string";
var strLength = someValue.length;
//다른 하나는 as-문법 입니다.
var strasLength = someValue.length;
// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// } //object 속에 label로 처리할 수 있음
function printLabel(labeledObj) {
    console.log(labeledObj.label);
    console.dir(labeledObj);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var config = {
    color: "red",
};
var a = { x: 3, y: 5 };
//a.x = 1;
var arr = [1, 2, 3, 4];
var roa = arr;
//roa[1] = 3;
arr = roa;
//변수는 const, property는 readOnly
function createSquare(config) {
    console.dir(config);
}
var mySquare = createSquare({ colur: "red", width: 100 });
var mySearch;
mySearch = function (src) {
    //꼭 이런 식으로 명칭을 같게 하지 않을 방법도 있음. 타입만 봄
    return src.search("1") > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
//두 타입의 인덱서(indexer)를 모두 지원하는 것은 가능하지만,
//숫자 인덱서에서 반환된 타입은 반드시 문자열 인덱서에서 반환된 타입의 하위 타입(subtype)이어야 합니다.
//이 이유는 number로 인덱싱 할 때, JavaScript는 실제로
//객체를 인덱싱하기 전에 string으로 변환하기 때문입니다.
//즉, 100 (number)로 인덱싱하는 것은 "100" (string)로 인덱싱하는 것과 같기 때문에,
//서로 일관성 있어야 합니다.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var Cloc = /** @class */ (function () {
    function Cl(h, m) {
    }
    Cl.prototype.tick = function () {
        console.log("beep beep");
    };
    return Cl;
}());
