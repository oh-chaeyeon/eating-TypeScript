//객체 리터럴 타입
let user: {
  id?: number;
  //물음표의 의미 : 이 프로퍼티가 있어도 되고 없어도 됨.
  //선택적 프로퍼티 또는 옵셔널 프로퍼티라고 부름.
  name: string;
} = {
  id: 1,
  name: "오채연",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "꾸꾸",
  color: "black",
};

user = {
  name: "육채연",
};

//절대 수정되면 안되는 프로퍼티 앞에 read-only라는 키워드를 붙이기!
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

//읽기 전용 속성으로 인한 오류가 남->  config.apiKey = "hacked";
