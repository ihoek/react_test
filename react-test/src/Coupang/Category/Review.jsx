import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Rate, ConfigProvider } from "antd";

//component
import ReviewImg from "./ReviewImg";
import SideElement from "../SideElement";

//list
import { photo_lst } from "./imglist";

//상품평
const Review = (props) => {
  //props

  //변수 선언
  const [starvalue, setStarValue] = useState(5); //별점 변수
  const type = "review";

  return (
    <>
      <div className="review">
        <div className="review_title">
          <span className="review_title_name">상품평</span>
          <span className="review_title_guide"> 상품평 운영원칙</span>
        </div>
        <div className="review_sub">
          동일한 상품에 대해 작성된 상품평으로, 판매자는 다를 수 있습니다.
        </div>
        <div>
          <ConfigProvider
            theme={{
              token: {},
              components: {
                // component token
                Rate: {
                  starSize: 40,
                },
              },
            }}
          >
            <Rate value={starvalue} disabled={true} />
          </ConfigProvider>
          <span className="review_average">14,988</span>
          <span className="review_detail">자세히보기</span>
        </div>
        <div className="review_img">
          {/* 상품평 이미지 */}
          {photo_lst.map((item) => (
            <SideElement imgsrc={item} type={type} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
