import { useEffect, useState } from "react";
import "../CSS/category.css";
import { Button } from "antd";

//component

const Question = (props) => {
  const { content, color, size, date } = props;

  return (
    <>
      <div className="question_row">
        <div className="question_title">
          <div className="question_left">
            <div className="question_img">질문</div>
            <div className="question_color">{color} |</div>
            <div className="question_size"> {size}</div>
            <span>쿠팡</span>
          </div>
          <div className="question_date">{date}</div>
        </div>
        <div className="question_content">{content}</div>
      </div>
    </>
  );
};

export default Question;
