import { useState } from "react";
import "../App.css";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const MainPage2 = () => {
  return (
    <div
      style={{
        maxWidth: 1280,
        height: 500,
        display: "flex",
        margin: "0px auto",
      }}
    >
      <MainLeft />
      <MainRight />
    </div>
  );
};

export default MainPage2;
