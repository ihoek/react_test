import "./MainStyle.css";
import { Button, Select, Space, Input } from "antd";

//글자색 옵션
const option3 = [
  { value: "white", label: "흰색" },
  { value: "gray", label: "회색" },
  { value: "green", label: "초록색" },
];
const MainColor = (props) => {
  const { fontColor, setFontColor } = props;

  return (
    <div>
      글자색 :
      <Select
        defaultValue={fontColor}
        style={{
          width: 120,
        }}
        onChange={(value) => setFontColor(value)}
        options={option3}
      />
    </div>
  );
};

export default MainColor;
