import { useEffect, useState } from "react";
import "./reviewtitle.css";

//antd
import { Button } from "antd";

//image

//list
import { review_lst } from "./detailslst";

//component
import ReviewContentElement from "./ReviewContentElement";

const ReviewContent = (props) => {
  //props
  const { pagination, paginationsize } = props;
  //useState

  console.log("page", pagination, paginationsize);
  let page_review_lst = review_lst.filter(
    (item, index) =>
      index >= (pagination - 1) * paginationsize &&
      index < pagination * paginationsize
  );

  return (
    <>
      <div>
        {page_review_lst.map((element) => (
          <ReviewContentElement
            key={element.id}
            nickname={element.nickname}
            choice={element.choice}
            date={element.date}
            content={element.content}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewContent;
