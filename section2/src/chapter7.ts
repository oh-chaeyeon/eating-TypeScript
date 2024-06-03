// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}
// void 타입까지 추가로 만드는 이유:
//정말 return문을 사용하고 싶지 않은 함수의 반환값 타입으로 void 사용

/* undefined 사용
function func2(): undefined {
  console.log("hello");
  return undefined;
}
*/

/* null 사용
function func2(): null {
  console.log("hello");
  return null;
}
*/

let a: void;
a = undefined;

/* 오류
a = 1;
a = "hello";
a = {};
a = null; "strictNullChecks": false경우에는 가능!
*/

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}
// func3처럼 절대로 정상적으로 종료될 수 없어서
// 이 함수의 반환 값이 있는 거 자체가 모순이다 라는 경우에 never 사용

function func4(): never {
  throw new Error();
}
// func4처럼 실행되면 바로 프로그램이 중지되는 코드일 경우
// 반환값 타입으로는 never을 정의하는데 가장 적합!

let b: never;
/* 오류
b = 1;
b = "hello";
b = {};
b = undefined;
b = null;
*/
