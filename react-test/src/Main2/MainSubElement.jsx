import { useState } from "react";
import "../MainStyle.css";
import { Button, Select, Space, Input } from "antd";
//image
import apple from "../img/apple.jpeg";
import apple2 from "../img/apple2.jpeg";
import apple3 from "../img/apple3.jpeg";

const option = [
  {
    value: apple,
    label: "사과1",
  },
  {
    value: apple2,
    label: "사과2",
  },
  {
    value: apple3,
    label: "사과3",
  },
];

const MainSubElement = (props) => {
  const { label, value, setMainImg } = props;
  return (
    <div
      style={{
        width: 150,
        height: 150,
        border: "3px solid black",
        borderRadius: 10,
      }}
      onClick={() => {
        setMainImg(value);
        //console.log(e.target.src);
      }}
    >
      <img
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
        src={value}
        alt="sub_main"
      />
    </div>
  );
};

export default MainSubElement;
