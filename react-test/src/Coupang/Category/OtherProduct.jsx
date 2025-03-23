import { useEffect, useState } from "react";
import "./HowProduct.css";

//antd
import { Button, ConfigProvider, Rate } from "antd";

const HowProduct = (props) => {
  //props
  const { imgsrc, title, price, discount, review } = props;

  //useState

  //변수 선언
  const [starvalue, setStarValue] = useState(5); //별점 변수

  return (
    <>
      <div className="subelements">
        <div>
          <img className="sub_img" src={imgsrc} alt="image" />
        </div>
        <div className="sub_title">{title}</div>
        <div className="sub_price">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>

        <div className="review">
          <ConfigProvider
            theme={{
              token: {},
              components: {
                // component token
                Rate: {
                  starSize: 12,
                },
              },
            }}
          >
            <Rate className="review_star" value={starvalue} disabled={true} />
          </ConfigProvider>
          <span className="sub_reviews">({review})</span>
        </div>
      </div>
    </>
  );
};

export default HowProduct;
