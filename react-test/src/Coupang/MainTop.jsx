import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

//component
import MainSide from "./MainSide";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

//image import
import bed1_color1 from "../img/bed1_color1.jpg";
import bed1_color2 from "../img/bed1_color2.jpg";
import bed1_color3 from "../img/bed1_color3.jpg";

const MainTop = (props) => {
  //변수 선언
  const [color, setColor] = useState(1); //색상 선택 변수(lst)
  const [mainimage, setMainImage] = useState(bed1_color1); //메인 이미지

  return (
    <>
      <div className="main_top">
        <MainSide
          color={color}
          setColor={setColor}
          mainimage={mainimage}
          setMainImage={setMainImage}
        />
        <MainLeft mainimage={mainimage} />
        <MainRight
          color={color}
          setColor={setColor}
          setMainImage={setMainImage}
        />
      </div>
    </>
  );
};

export default MainTop;
