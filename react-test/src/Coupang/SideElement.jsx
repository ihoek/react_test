import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

const SideElement = (props) => {
  const { type, imgsrc, mainimage, setMainImage } = props;

  //마우스 hover 시 메인 이미지 띄우기
  const onMouseIn = (e) => {
    console.log(e);
    setMainImage(e);
  };

  return (
    <>
      {type === "review" ? (
        //상품평에 사용될 이미지
        <div className="side_element">
          <img className="imgstyle" src={imgsrc} alt="side img" />
        </div>
      ) : (
        // 메인에 사용될 이미지
        <div className="side_element" onMouseEnter={() => onMouseIn(imgsrc)}>
          <img className="imgstyle" src={imgsrc} alt="side img" />
        </div>
      )}
    </>
  );
};

export default SideElement;
