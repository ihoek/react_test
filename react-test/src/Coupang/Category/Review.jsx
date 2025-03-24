import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Rate, ConfigProvider, Input, Pagination } from "antd";

//component
import SideElement from "../SideElement";
import ReviewTitle from "./Reviews_title";
import ReviewContent from "./ReviewContent";
import ProductColumn from "./ProductColumn";

//list
import { photo_lst } from "./imglist";

//상품평
const Review = (props) => {
  //props

  //변수 선언
  const [starvalue, setStarValue] = useState(5); //별점 변수
  const [pagination, setPagination] = useState(1); //현재 페이지 번호
  const [paginationsize, setPaginationSize] = useState(5);
  const type = "review";

  //페이지네이션
  const onChange = (current, pageSize) => {
    setPagination(current);
    setPaginationSize(pageSize);
    //console.log(current, pageSize);
  };

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
          {/* 후기 내용 */}
          <div>
            <ReviewContent
              pagination={pagination}
              paginationsize={paginationsize}
            />
            <div className="pagination">
              <Pagination
                onChange={onChange}
                defaultCurrent={1}
                defaultPageSize={5}
                total={photo_lst.length}
              />
            </div>
          </div>
        </div>
        {/* 4점 이상 리뷰가 좋은 상품 */}
        <div className="pruduct_how">
          <ProductColumn type={"over"} />
        </div>
      </div>
    </>
  );
};

export default Review;
