"use strict";
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
