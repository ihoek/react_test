import { useEffect, useState } from "react";
import "./reviewtitle.css";

//antd
import { Input, Select, Rate, ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

//image
import profileimg from "../../img/img-profile-empty.png";

const ReviewContentElement = (props) => {
  const { nickname, choice, date, content } = props;

  //변수

  return (
    <>
      <div className="review_person">
        <div className="review_person_top">
          <div className="review_img_div">
            <img className="review_img" src={profileimg} alt="profile" />
          </div>
          <div className="person_info">
            <span className="nickname">{nickname}</span>
            <span className="rate">{date}</span>
            <span className="seller">판매자 : 쿠팡(주)</span>
          </div>
        </div>
        <div className="choice">{choice}</div>
        <div className="content">{content}</div>
        <div className="reportbtn">신고하기</div>
      </div>
    </>
  );
};

export default ReviewContentElement;
