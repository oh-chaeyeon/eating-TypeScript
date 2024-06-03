//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
/*
  //func 안에서는 func안의 User가 사용되고, 밖에서는 밖의 User이 타입이 됨.
  function func() {
    type User = {};
  }
  */

let user1: User = {
  id: 1,
  name: "일채연",
  nickname: "채채",
  birth: "7월 13일",
  bio: "하이!",
  location: "용인",
};

let user2: User = {
  id: 2,
  name: "이채연",
  nickname: "채빵",
  birth: "7월 13일",
  bio: "하이!",
  location: "용인",
};

//인덱스 시그니처
type CountryCodes = {
  /*
    Korea: string;
    UnitedState: string;
    UnitedKingdom: string;
    */
  [key: string]: string;
};

let CountryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  //Korea: number; //korea 타입을 반드시 가지도록!
  //Korea: string -> 오류남!!!
  //오류나는 이유 : value의 type이 추가적인 property의 value의 type이
  //반드시 index signature의 value의 type과 일치하거나 호환해야 함
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
