import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";
import { InputNumber, Button } from "antd";

//component
import OptionElement from "./OptionElement";

//image import
import bed1_color1 from "../img/bed1_color1.jpg";
import bed1_color2 from "../img/bed1_color2.jpg";
import bed1_color3 from "../img/bed1_color3.jpg";

const MainRight = (props) => {
  //props
  const { color, setColor, setMainImage } = props;

  //inputNumber
  const onChange = (value) => {
    console.log("changed", value);
  };

  //대표 사진 배열
  const img_arr = [
    { id: 1, value: bed1_color1, label: "베이지+아이보리" },
    { id: 2, value: bed1_color2, label: "차콜+그레이" },
    { id: 3, value: bed1_color3, label: "핑크+그레이" },
  ];

  return (
    <>
      <div className="main_right">
        {/* title */}
        <div className="container_title">
          <div className="container_title_left">
            <div>콤멧</div>
            <div>콤멧 홈 베이직 차렵이불</div>
            <div>별점 14,984개 상품평</div>
          </div>
          <div className="container_title_right">
            <div>좋아요</div>
            <div>공유</div>
          </div>
        </div>
        {/* price */}
        <div className="container_price">
          <div>40% 29,900원 토글</div>
          <div>18,410원 쿠팡판매가</div>
          <div>17,910원 와우할인가 로켓배송</div>
        </div>

        {/* shipping */}
        <div className="container_shipping">
          <div>무료배송 (로켓배송 상품 19,800원 이상 구매 시)</div>
          <div>내일(목) 3/20 도착 보장(55분 내 주문 시 / 서울, 경기 기준)</div>
        </div>

        {/* option */}
        <div className="container_option">
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
          <Button>장바구니 담기</Button>
          <Button type="primary">바로구매</Button>
        </div>

        {/* choose - color */}
        <div className="container_choose">
          {img_arr.map((element) => (
            <OptionElement
              color={color}
              setColor={setColor}
              label={element.label}
              value={element.value}
              id={element.id}
              key={element.id}
              setMainImage={setMainImage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainRight;
