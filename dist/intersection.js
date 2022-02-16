"use strict";
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello, I'm ".concat(name, "."));
    };
    return ConsoleLogger;
}());
console.dir(ConsoleLogger.prototype);
var jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
function isFish(pet) {
    return pet.swim !== undefined;
}
var pet = { swim: function () { return console.log("swim"); } };
if (isFish(pet)) {
    pet.swim();
}
function move(pet) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
