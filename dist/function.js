"use strict";
// // let myAdd: (x: number, y: number) => number = function (
// //   x: number,
// //   y: number
// // ): number {
// //   return x + y;
// // };
// let myAdd: (baseValue: number, increment: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };
// function buildName(firstname?: string, lastname = "hello"): void {}
// function build(firstname: string, ...restOfName: string[]): void {}
// //쪼금 신기하다
// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function (this: Deck) {
//     // NOTE: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
//     // NOTE: 아랫줄은 화살표 함수로써, 'this'를 이곳에서 캡처할 수 있도록 합니다
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// function f(this: void) {
//   // 독립형 함수에서 `this`를 사용할 수 없는 것을 확인함
// }
// interface Event {
//   message: string;
// }
// interface UIElement {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }
// class Handler {
//   info!: string;
//   onClickBad(this: Handler, e: Event) {
//     // 이런, `this`가 여기서 쓰이는군요. 이 콜백을 쓰면 런타임에서 충돌을 일으키겠군요
//     this.info = e.message;
//   }
// }
// let h = new Handler();
// //uiElement.addClickListener(h.onClickBad); // 오류!
