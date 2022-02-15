"use strict";
// let myAdd: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };
var myAdd = function (x, y) {
    return x + y;
};
function buildName(firstname, lastname) {
    if (lastname === void 0) { lastname = "hello"; }
}
function build(firstname) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
}
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
        // NOTE: 아랫줄은 화살표 함수로써, 'this'를 이곳에서 캡처할 수 있도록 합니다
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
function f() {
    // 독립형 함수에서 `this`를 사용할 수 없는 것을 확인함
}
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        // 이런, `this`가 여기서 쓰이는군요. 이 콜백을 쓰면 런타임에서 충돌을 일으키겠군요
        this.info = e.message;
    };
    return Handler;
}());
var h = new Handler();
//uiElement.addClickListener(h.onClickBad); // 오류!
