"use strict";
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
console.log(result);
//function createElement(tagName: "input"): HTMLInputElement;
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
