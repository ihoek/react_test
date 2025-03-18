import { useState } from "react";
import "./App.css";
import MainDetail from "./MainDetail";
import MainDetailTrans from "./MainDetailTrans";
import MainDetailChange from "./MainDetailChange";
import MainDetailGreen from "./MainDetailGreen";
import MainDetailBlue from "./MainDetailBlue";
import MainDetailDark from "./MainDetailDark";
import MainDetailPurple from "./MainDetailPurple";
import Calculator from "./Calculator";
import { Button, Select, Space, Input } from "antd";
import apple from "./img/apple.jpeg";
import banana from "./img/banana.jpeg";
import grape from "./img/grape.jpeg";
import Mainfurit from "./Mainfurit";
import MainBack from "./MainBack";
import MainColor from "./MainColor";
import MainText from "./MainText";
import MainImg from "./MainImg";
import MainResult from "./MainResult";

const MainPage1 = () => {
  //과일 value 넣을 변수
  const [fruit, setFruit] = useState(apple);
  //배경색
  const [back, setBack] = useState("red");
  //글자색
  const [fontColor, setFontColor] = useState("white");
  //input 저장용 - text
  const [text, setText] = useState("");

  //const main1 = "main 01";
  // const sample = [
  //   { title: "제목 제목1", content: "세상에나1" },
  //   { title: "제목 제목2", content: "세상에나2" },
  //   { title: "제목 제목3", content: "세상에나3" },
  //   { title: "제목 제목4", content: "세상에나4" },
  //   { title: "제목 제목5", content: "세상에나5" },
  // ];
  //return <h1>{main1}</h1>;
  //return <h1>{main1}</h1>;
  //return <MainDetail name="코딩온" age="12" />;

  // return (
  //   <div className="wrap">
  //     <div className="box">
  //       {sample.map((x, i) => {
  //         return <MainDetail key={i} data={x} />;
  //       })}
  //     </div>
  //     <h1>상품소개</h1>
  //   </div>
  // );
  //const [number, setNumber] = useState(2);

  //초기화 함수
  // const reset = () => {
  //   setNumber(2);
  // };

  // // *2 함수
  // const pow = () => {
  //   setNumber(number * 2);
  // };

  // const pow2 = () => {
  //   setNumber(Math.pow(number, 2));
  // };

  // return (
  //   // <MainDetail
  //   //   number={number}
  //   //   setNumber={setNumber}
  //   //   sumNumber={sumNumber}
  //   //   miNumber={miNumber}
  //   // />
  //   <div>
  //     <div>{number}</div>
  //     <button
  //       onClick={() => {
  //         reset();
  //       }}
  //     >
  //       초기화
  //     </button>
  //     <button
  //       onClick={() => {
  //         pow();
  //       }}
  //     >
  //       곱하기 2
  //     </button>
  //     <button
  //       onClick={() => {
  //         pow2();
  //       }}
  //     >
  //       제곱
  //     </button>
  //   </div>
  // );

  //첫 번째 : 숫자 +-1씩 되게 하기
  const [number, setNumber] = useState(0);

  //플러스 함수 만들기
  const sumNumber = () => {
    setNumber(number + 1);
  };

  //마이너스 함수 만들기
  const miNumber = () => {
    setNumber(number - 1);
  };
  //두 번째 : 번역 버튼을 만드록 눌렀을 때 hello
  const [hello, setHello] = useState("안녕하세요");

  const Trans = () => {
    setHello("Hello");
  };

  //세 번째 : 버튼을 눌렀을 때 아무거나 나오면 됨(param 받아서 출력)
  const changevalue = (value) => {
    return value;
  };

  //실시간 input 값 받기
  const [idValue, setidValue] = useState("");

  const saveUserId = (event) => {
    setidValue(event.target.value);
  };

  //calculator 연습
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [result, setResult] = useState();

  const plusinput = () => {
    //Number(first) + Number(second)
    setResult(setFirst);
  };

  return (
    <div className="wrap-box">
      <Mainfurit fruit={fruit} setFruit={setFruit} />
      <MainBack back={back} setBack={setBack} />
      <MainColor fontColor={fontColor} setFontColor={setFontColor} />
      <MainText text={text} setText={setText} />
      <br />
      <MainImg fruit={fruit} />
      <MainResult text={text} back={back} fontColor={fontColor} />

      {/* <Button type="primary" ghost>
        Primary
      </Button> */}
      {/* <MainDetail
        number={number}
        setNumber={setNumber}
        sumNumber={sumNumber}
        miNumber={miNumber}
      />
      <MainDetailTrans hello={hello} setHello={setHello} Trans={Trans} />
      <MainDetailChange changevalue={changevalue} />
      <MainDetailGreen />
      <MainDetailBlue />
      <MainDetailDark />
      <MainDetailPurple idValue={idValue} saveUserId={saveUserId} />
      <h1>input 연습</h1>
      <Calculator
        result={result}
        plusinput={plusinput}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
      /> */}
    </div>
  );
};

export default MainPage1;
