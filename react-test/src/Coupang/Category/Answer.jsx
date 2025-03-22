import { useEffect, useState } from "react";
import "../CSS/category.css";
import { Button } from "antd";

//component

const Answer = (props) => {
  const { content, date } = props;

  return (
    <>
      <div className="answer_row">
        <div className="answer_title">
          <div className="answer_left">
            <div className="answer_reply_icon"></div>
            <div className="answer_img">답변</div>
            <span className="answer_respon">[COUPANG]</span>
          </div>
          <div className="answer_date">{date}</div>
        </div>
        <div className="answer_content">{content}</div>
      </div>
    </>
  );
};

export default Answer;
