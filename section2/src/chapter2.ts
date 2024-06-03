//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "chaebread"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multArr: (number | string)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 길이와 타입이 고정된 배열

let tup1: [number, number] = [1, 2];
//오류1 : tup1 = [1,2,3];
//오류2 : tup1 = ["1","2"];

let tup2: [number, string, boolean] = [1, "2", true];
//오류1 : tup2 = ["2" , 1, true]; 타입의 순서가 안 맞음
//오류2 : tup2 = [1]; 배열의 개수가 틀림

const users: [string, number][] = [
  ["일채연", 1],
  ["이채연", 2],
  ["삼채연", 3],
  ["사채연", 4],
  ["오채연", 5],
];
//이때, 다른 동료가 [6, "육채연"] 이라고 순서를 헷갈릴 수 있음.
