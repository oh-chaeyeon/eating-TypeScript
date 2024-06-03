// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUSET"] = 2] = "GUSET";
})(Role || (Role = {}));
//문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "일채연",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: "이채연",
    role: Role.USER, // 1 <- 일반 독자
};
const user3 = {
    name: "삼채연",
    role: Role.GUSET, // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
// 결과값 : { name: '일채연', role: 0 } { name: '이채연', role: 1 } { name: '삼채연', role: 2 }
// { name: '일채연', role: 0, language: 'ko' } { name: '이채연', role: 1 } { name: '삼채연', role: 2 }
/*
enum Role {
  ADMIN = 10, // 10
  USER, // 11
  GUSET, // 12
}
 */
/*
enum Role {
  ADMIN, // 0
  USER = 10, // 10
  GUSET, // 11
}
 */
