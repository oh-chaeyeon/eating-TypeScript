//객체 리터럴 타입
let user = {
    id: 1,
    name: "오채연",
};
let dog = {
    name: "꾸꾸",
    color: "black",
};
user = {
    name: "육채연",
};
//절대 수정되면 안되는 프로퍼티 앞에 read-only라는 키워드를 붙이기!
let config = {
    apiKey: "MY API KEY",
};
export {};
//읽기 전용 속성으로 인한 오류가 남->  config.apiKey = "hacked";
