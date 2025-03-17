import { useState } from "react";
import "./App.css";
import MainDetail from "./MainDetail";

const MainPage1 = () => {
  const main1 = "main 01";
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
  const [number, setNumber] = useState(2);

  // //플러스 함수 만들기
  // const sumNumber = () => {
  //   setNumber(number + 1);
  // };

  // //마이너스 함수 만들기
  // const miNumber = () => {
  //   setNumber(number - 1);
  // };

  //초기화 함수
  const reset = () => {
    setNumber(2);
  };

  // *2 함수
  const pow = () => {
    setNumber(number * 2);
  };

  const pow2 = () => {
    setNumber(Math.pow(number, 2));
  };

  return (
    // <MainDetail
    //   number={number}
    //   setNumber={setNumber}
    //   sumNumber={sumNumber}
    //   miNumber={miNumber}
    // />
    <div>
      <div>{number}</div>
      <button
        onClick={() => {
          reset();
        }}
      >
        초기화
      </button>
      <button
        onClick={() => {
          pow();
        }}
      >
        곱하기 2
      </button>
      <button
        onClick={() => {
          pow2();
        }}
      >
        제곱
      </button>
    </div>
  );
};

export default MainPage1;
