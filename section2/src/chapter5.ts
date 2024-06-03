// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

//숫자형 enum
enum Role {
  ADMIN = 0, // 만역, 10번부터 시작하면
  USER = 1, // 자동으로 밑으로 내려갈수록 +1 => 11
  GUSET = 2, // 12
}

//문자형 enum
enum Language {
  korean = "ko",
  english = "en",
}

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
