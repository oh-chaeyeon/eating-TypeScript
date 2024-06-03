//any : 모든 누구나 -> any type은 어떤 타입이든지 이 변수에 넣을 수 있음!
//특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;

/* 런타임에 에러가 발생하는 최악의 상황을 유발함!
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();
*/

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

/* 오류
num = unknownVar;
unknownVar.toUpperCase();
*/

if (typeof unknownVar === "number") {
  num = unknownVar; //타입 정제 또는 터입 조픽
}
