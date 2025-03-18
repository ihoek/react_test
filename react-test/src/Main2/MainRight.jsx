import { useState } from "react";
import "../MainStyle.css";
import { Rate, Divider, Select, Button, Alert } from "antd";

const MainRight = (props) => {
  //별점
  const [mark, setMark] = useState(5);
  //개당 가격
  const [perPrice, setPerPrice] = useState(34500);
  //옵션 선택 변수
  const [optionvalue, setOptionValue] = useState(0);
  //개수
  const [num, setNum] = useState(1);

  //총 가격
  const [totalprice, setTotalPrice] = useState(perPrice);

  //옵션 선택
  const option = [
    {
      value: 0,
      label: "기본(+ 0원)",
    },
    {
      value: 3000,
      label: "선물포장(+ 3,000원)",
    },
    {
      value: 11000,
      label: "고급포장(+ 11,000원)",
    },
  ];

  // - 버튼 클릭 시
  const miusNumber = (number) => {
    //console.log("number", number);

    if (number <= 1) {
      alert("불가능");
      return;
    }
    setNum(number - 1);
    //total 가격 변화 = 기본 요금 * 개수 => perPrice * number
    setTotalPrice((perPrice + optionvalue) * (number - 1));
  };

  // + 버튼 클릭 시
  const plusNumber = (number) => {
    //console.log("number", number);
    setNum(number + 1);

    //total 가격 변화 = 기본 요금 * 개수 => perPrice * number
    setTotalPrice((perPrice + optionvalue) * (number + 1));
  };

  //select 옵션 선택 시
  const selectOption = (op) => {
    console.log("op", op);
    setOptionValue(op);
    setTotalPrice(perPrice + op);
  };

  const Wait = () => {
    alert("준비중입니다.");
  };

  return (
    <div className="mainright">
      <h2>맛있는 사과</h2>
      <div>
        <Rate value={mark} />
        2,905개 상품평
        <div>{perPrice}원 (박스당)</div>
      </div>
      <Divider
        style={{
          borderColor: "#7cb305",
        }}
      ></Divider>
      <div>이 상품은 내일 도착, 무료배송</div>
      <div className="select">
        <div className="number">
          <Button className="number_btn" onClick={(number) => miusNumber(num)}>
            -
          </Button>
          <div>{num}</div>
          <Button className="number_btn" onClick={(number) => plusNumber(num)}>
            +
          </Button>
        </div>
        {/* select */}
        <Select
          defaultValue={optionvalue}
          className="packaging"
          options={option}
          onChange={selectOption}
        />

        <Button onClick={Wait}>장바구니</Button>
        <Button onClick={Wait}>바로구매</Button>
      </div>
      <div>총 : {totalprice}원</div>
    </div>
  );
};

export default MainRight;
