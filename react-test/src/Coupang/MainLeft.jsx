import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

const MainLeft = (props) => {
  //props
  const { mainimage } = props;

  return (
    <>
      <div className="main_left">
        <div className="main_img">
          <img className="imgstyle" src={mainimage} alt="main_img" />
        </div>
      </div>
    </>
  );
};

export default MainLeft;
