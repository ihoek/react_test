import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";
import { Button } from "antd";

//component
import MainTop from "./MainTop";
import MainSub from "./MainSub";
import Category from "./Category/category";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const MainPage4 = () => {
  return (
    <>
      <div className="coupang_wrap">
        <MainTop />
        <MainSub />
        <Category />
        <div className="scroll__container" onClick={scrollToTop}>
          <button id="top" type="button">
            Top
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage4;
