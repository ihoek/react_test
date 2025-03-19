import { useEffect, useState } from "react";
import "../MainStyle.css";

//component
import SideElement from "./SideElement";

//image import
import bed1_color1 from "../img/bed1_color1.jpg";
import bed2_color1 from "../img/bed2_color1.jpg";
import bed3_color1 from "../img/bed3_color1.jpg";

import bed1_color2 from "../img/bed1_color2.jpg";
import bed2_color2 from "../img/bed2_color2.jpg";
import bed3_color2 from "../img/bed3_color2.jpg";

import bed1_color3 from "../img/bed1_color3.jpg";
import bed2_color3 from "../img/bed2_color3.jpg";
import bed3_color3 from "../img/bed3_color3.jpg";

const MainSide = (props) => {
  //props
  const { color, setColor, mainimage, setMainImage } = props;

  //image color arr
  const beige_arr = [bed1_color1, bed2_color1, bed3_color1];
  const gray_arr = [bed1_color2, bed2_color2, bed3_color2];
  const pink_arr = [bed1_color3, bed2_color3, bed3_color3];

  //현재 선택된 색상에 따른 배열
  let current_color = [];

  //Color에 따른 배열 변화
  if (color === 1) {
    current_color = beige_arr;
  } else if (color === 2) {
    current_color = gray_arr;
  } else {
    current_color = pink_arr;
  }

  return (
    <>
      <div className="main_side">
        {current_color.map((element, index) => (
          <SideElement
            imgsrc={element}
            key={index}
            mainimage={mainimage}
            setMainImage={setMainImage}
          />
        ))}
      </div>
    </>
  );
};

export default MainSide;
