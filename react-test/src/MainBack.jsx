import "./MainStyle.css";
import { Button, Select, Space, Input } from "antd";

//select 옵션 - 과일 옵션
const option2 = [
  { value: "red", label: "빨간색" },
  { value: "yellow", label: "노란색" },
  { value: "blue", label: "파란색" },
];

const MainBack = (props) => {
  const { back, setBack } = props;

  return (
    <div>
      배경색 :{" "}
      <Select
        defaultValue={back}
        style={{
          width: 120,
        }}
        onChange={(value) => {
          setBack(value);
        }}
        options={option2}
      />
    </div>
  );
};

export default MainBack;
