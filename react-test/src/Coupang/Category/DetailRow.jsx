import { useEffect, useState } from "react";
import "../CSS/category.css";

//데이터 가져오기
import { details_lst } from "./detailslst"; //테이블에 사용할 배열

//antd
import {} from "antd";

//component
import CategoryTable from "./CategoryTable";

//table
const DetailRow = (props) => {
  //props

  //console.log("details_lst", details_lst);
  let fristrow = details_lst.filter((_, index) => index < 3);
  let secondrow = details_lst.filter((_, index) => index >= 4 && index < 7);
  let thirdrow = details_lst.filter((_, index) => index >= 8);
  return (
    <>
      <div className="detail_row_title">필수 표기 정보</div>
      <div className="row_1">
        <div className="row1_2">
          <div className="fristrow">
            {fristrow.map((element, index) => (
              <CategoryTable
                key={element.id}
                title={element.title}
                content={element.content}
              />
            ))}
          </div>
          <div className="secondrow">
            {secondrow.map((element, index) => (
              <CategoryTable
                key={element.id}
                title={element.title}
                content={element.content}
              />
            ))}
          </div>
        </div>
        <div className="row3">
          <span className="row3_left">
            <CategoryTable
              key={details_lst[3].id}
              title={details_lst[3].title}
              content={details_lst[3].content}
            />
          </span>
          <span className="row3_right">
            <CategoryTable
              key={details_lst[7].id}
              title={details_lst[7].title}
              content={details_lst[7].content}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailRow;
