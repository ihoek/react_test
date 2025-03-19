import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

const MainLeft = (props) => {
  //props
  const { mainimage } = props;

  return (
    <>
      <div className="main_left">
        <img className="imgstyle" src={mainimage} alt="" />
      </div>
    </>
  );
};

export default MainLeft;
