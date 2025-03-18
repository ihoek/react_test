import "./MainStyle.css";
import { Button, Select, Space, Input } from "antd";

//글자색 옵션
const option3 = [
  { value: "white", label: "흰색" },
  { value: "gray", label: "회색" },
  { value: "green", label: "초록색" },
];
const MainText = (props) => {
  const { text, setText } = props;

  return (
    <div>
      내용 :
      <Input
        style={{ width: 400 }}
        onChange={(e) => setText(e.target.value)}
      ></Input>
    </div>
  );
};

export default MainText;
