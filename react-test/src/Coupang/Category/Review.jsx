import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Rate, ConfigProvider, Input } from "antd";

//component
import SideElement from "../SideElement";
import ReviewTitle from "./Reviews_title";

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
        {/* 이미지 */}
        <div className="review_img">
          {/* 상품평 이미지 */}
          {photo_lst.map((item, index) => (
            <SideElement key={index} imgsrc={item} type={type} />
          ))}
        </div>
        {/* 후기 */}
        <div className="reviews_content">
          <div className="reviews_title">
            <ReviewTitle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
