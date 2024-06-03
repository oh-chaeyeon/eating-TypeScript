//number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
//number에 관한 오류
//num1 = "hello"; 문자열을 넣으면 오류
//num1.toUpperCase(); 문자열만 가능한 메서드 사용 불가능
//string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello  ${num1}`;
//string에 관한 오류
//str1 = 123;()
//str1.toFixed(); 넘버만 가능한 메서드 사용 불가능
//boolean
let bool1 = true;
let bool2 = false;
//null
let null1 = null;
//undefined
let unde1 = undefined;
//이 코드를 가능하게 하려면-> strictNullChecks를 false로 바꾸기!
//let numA: number = null;
// 리터럴 타입
let numA = 10;
//오류 : numA = 12;
let strA = "hello";
//오류 : strA = "df";
let boolA = true;
export {};
//오류 : let boolA: true = false;
