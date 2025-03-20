import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";
import {
  InputNumber,
  Button,
  Rate,
  Alert,
  notification,
  ConfigProvider,
} from "antd";

//component
import OptionElement from "./OptionElement";

//image import
import bed1_color1 from "../img/bed1_color1.jpg";
import bed1_color2 from "../img/bed1_color2.jpg";
import bed1_color3 from "../img/bed1_color3.jpg";
import coupang_i from "../img/coupang_i.png";

const MainRight = (props) => {
  //props
  const { color, setColor, setMainImage } = props;

  //변수 선언
  const [starvalue, setStarValue] = useState(5); //별점 변수
  const [wowPrice, setWowPrice] = useState(17910); //와우 할인가
  const [coupangPrice, setCoupangPrice] = useState(18410); //쿠팡할인가
  const [number, setNumber] = useState(1); //상품 개수 inputnumber

  //inputNumber
  const onChange = (value) => {
    //console.log("changed", value);
    setCoupangPrice(value * 18410);
    setWowPrice(value * 17910);
  };

  //준비중입니다 alert
  const alertcontent = () => {
    notification.warning({ message: "준비중입니다" });
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
            <div className="company">콤멧</div>
            <div className="title">콤멧 홈 베이직 차렵이불</div>
            <div className="star">
              <Rate value={starvalue} disabled={true} />
              <div className="count">14,984개 상품평</div>
            </div>
          </div>
          <div className="container_title_right">
            <button onClick={alertcontent} className="good"></button>
            <div onClick={alertcontent} className="share"></div>
          </div>
        </div>

        {/* price */}
        <div className="container_price">
          <div className="origin_price">
            40% <div className="price">29,900원</div>
            <div className="toggle_div" onClick={alertcontent}>
              <img className="toggle" src={coupang_i} alt="coupang_i" />
            </div>
          </div>
          <div className="coupang_price">
            <strong className="strong_price">
              {coupangPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </strong>{" "}
            쿠팡판매가
          </div>
          <div className="rocket_price">
            <strong className="string_rocket">
              {wowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </strong>{" "}
            와우할인가
            <div className="rocket_img">
              <img
                className="imgstyle"
                src="https://image10.coupangcdn.com/image/badges/rocket/rocket_logo.png"
                alt="rocket"
              />
            </div>
          </div>
        </div>

        {/* shipping */}
        <div className="container_shipping">
          <div className="shipping_title">
            <div className="shipping_free">무료배송</div> (로켓배송 상품
            19,800원 이상 구매 시)
          </div>
          <div className="shipping_sub">
            <div className="shipping_weeken">내일(목) 3/20</div>
            <div className="shipping_arrive">도착 보장</div>(55분 내 주문 시 /
            서울, 경기 기준)
          </div>
        </div>

        {/* option */}
        <div className="container_option">
          <InputNumber
            className="option_input"
            min={1}
            defaultValue={number}
            onChange={onChange}
            controls={true}
          />
          <Button onClick={alertcontent} className="option_btn">
            장바구니 담기
          </Button>
          <Button onClick={alertcontent} className="option_btn" type="primary">
            바로구매
          </Button>
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
