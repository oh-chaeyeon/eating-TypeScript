//number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

//number에 관한 오류
//num1 = "hello"; 문자열을 넣으면 오류
//num1.toUpperCase(); 문자열만 가능한 메서드 사용 불가능

//string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello  ${num1}`;

//string에 관한 오류
//str1 = 123;()
//str1.toFixed(); 넘버만 가능한 메서드 사용 불가능

//boolean
let bool1: boolean = true;
let bool2: boolean = false;

//null
let null1: null = null;

//undefined
let unde1: undefined = undefined;

//이 코드를 가능하게 하려면-> strictNullChecks를 false로 바꾸기!
//let numA: number = null;

// 리터럴 타입
let numA: 10 = 10;
//오류 : numA = 12;
let strA: "hello" = "hello";
//오류 : strA = "df";
let boolA: true = true;
//오류 : let boolA: true = false;
