import { useState } from "react";
import "../MainStyle.css";
import { Button, Select, Space, Input } from "antd";

//Component
import MainSub from "./MainSub";

//image
import apple from "../img/apple.jpeg";
import apple2 from "../img/apple2.jpeg";
import apple3 from "../img/apple3.jpeg";

const MainLeft = (props) => {
  //메인 이미지
  const [mainimg, setMainImg] = useState(apple);

  //사진 클릭 이벤트

  return (
    <div style={{ width: "50%", height: "100%" }}>
      {/* 메인 이미지 */}
      <div
        style={{
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={mainimg} alt="main_img" />
      </div>
      <div style={{ height: "50%" }}>
        <MainSub mainimg={mainimg} setMainImg={setMainImg} />
      </div>
    </div>
  );
};

export default MainLeft;
