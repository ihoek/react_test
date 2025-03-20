import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

import { Rate, ConfigProvider, Progress } from "antd";

//Swiper용 component
const SubElement = (props) => {
  const { imgsrc, title, discount, origin_price, discount_price, goal } = props;

  //변수 선언
  const [starvalue, setStarValue] = useState(5); //별점 변수

  return (
    <>
      <div className="subelements">
        <div>
          <img className="sub_img" src={imgsrc} alt="image" />
        </div>
        <div className="promotion_badge">특가진행중</div>
        <div className="promotion_title">{title}</div>
        <div>
          <span className="wow_discount_title">와우할인가</span>
          <span className="discount">{discount}</span>
          <span className="origin_price">
            {origin_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <div className="discount_price">
          {discount_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>
        <div className="arrive">내일(금) 도착</div>
        <div className="delivery_text">무료배송 내일도착</div>
        <div className="review">
          <ConfigProvider
            theme={{
              token: {},
              components: {
                // component token
                Rate: {
                  starSize: 16,
                },
              },
            }}
          >
            <Rate value={starvalue} disabled={true} />
          </ConfigProvider>
        </div>
        <div className="progress_div">
          <ConfigProvider
            theme={{
              token: {
                // global
                colorText: "#454f5b",
                fontSize: 12,
              },
              components: {
                Progress: {
                  defaultColor: "#637381",
                },
              },
            }}
          >
            <Progress percent={goal} className="progress_main" />
            <span className="progress">남음</span>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
};

export default SubElement;
