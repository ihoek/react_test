import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

//component
import MainTop from "./MainTop";
import MainSub from "./MainSub";
import Category from "./Category/category";

const MainPage4 = () => {
  return (
    <>
      <div className="coupang_wrap">
        <MainTop />
        <MainSub />
        <Category />
      </div>
    </>
  );
};

export default MainPage4;
