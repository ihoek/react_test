import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

//component
import MainTop from "./MainTop";
import MainSub from "./MainSub";

const MainPage4 = () => {
  return (
    <>
      <div className="coupang_wrap">
        <MainTop />
        <MainSub />
      </div>
    </>
  );
};

export default MainPage4;
