import "./MainStyle.css";
import apple from "./img/apple.jpeg";
import banana from "./img/banana.jpeg";
import grape from "./img/grape.jpeg";
import { Button, Select, Space, Input } from "antd";

//select 옵션 - 과일 옵션
const optin1 = [
  {
    value: apple, //값
    label: "사과", //보여지는 것
  },
  {
    value: banana,
    label: "바나나",
  },
  {
    value: grape,
    label: "포도",
  },
];

const Mainfurit = (props) => {
  const { fruit, setFruit } = props;
  console.log("fruit", fruit);

  const fruitChange = (value) => {
    //console.log("value", value);
    setFruit(value);
  };

  return (
    <div>
      과일 :
      <Select
        defaultValue={fruit}
        style={{
          width: 120,
        }}
        onChange={fruitChange}
        options={optin1}
      />
    </div>
  );
};

export default Mainfurit;
