import { useState } from "react";
import "../MainStyle.css";
import { Button, Select, Space, Input } from "antd";
//image
import apple from "../img/apple.jpeg";
import apple2 from "../img/apple2.jpeg";
import apple3 from "../img/apple3.jpeg";

//Component
import MainSubElement from "./MainSubElement";

const option = [
  {
    id: 1,
    value: apple,
    label: "사과1",
  },
  { id: 2, value: apple2, label: "사과2" },
  { id: 3, value: apple3, label: "사과3" },
];

const MainSub = (props) => {
  const { mainimg, setMainImg } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        gap: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {option.map((element) => (
        <MainSubElement
          label={element.label}
          value={element.value}
          setMainImg={setMainImg}
          key={element.id}
        />
      ))}
    </div>
  );
};

export default MainSub;
