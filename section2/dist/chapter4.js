//타입 별칭
/*
  //func 안에서는 func안의 User가 사용되고, 밖에서는 밖의 User이 타입이 됨.
  function func() {
    type User = {};
  }
  */
let user1 = {
    id: 1,
    name: "일채연",
    nickname: "채채",
    birth: "7월 13일",
    bio: "하이!",
    location: "용인",
};
let user2 = {
    id: 2,
    name: "이채연",
    nickname: "채빵",
    birth: "7월 13일",
    bio: "하이!",
    location: "용인",
};
let CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
export {};
