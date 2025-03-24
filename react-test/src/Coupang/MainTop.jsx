import { useEffect, useState } from "react";

// import "../MainStyle.css";
import "./Main.css";

//component
import MainSide from "./MainSide";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

//image import
import bed1_color1 from "../img/bed1_color1.jpg";

const MainTop = (props) => {
  //변수 선언
  const [color, setColor] = useState(1); //색상 선택 변수(lst)
  const [mainimage, setMainImage] = useState(bed1_color1); //메인 이미지

  return (
    <>
      <div className="main_top">
        {/* 메인 상품의 상세 정보 */}
        <MainRight
          color={color}
          setColor={setColor}
          setMainImage={setMainImage}
        />

        <div className="main_top_img">
          {/* 메인 상품의 단독 이미지 */}
          <MainLeft mainimage={mainimage} />

          {/* 메인 이미지 상세 컷 */}
          <MainSide
            color={color}
            setColor={setColor}
            mainimage={mainimage}
            setMainImage={setMainImage}
          />
        </div>
      </div>
    </>
  );
};

export default MainTop;
