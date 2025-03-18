import "./MainStyle.css";
import { Button, Select, Space, Input } from "antd";

const MainResult = (props) => {
  const { text, back, fontColor } = props;

  return (
    <div
      style={{
        padding: 10,
        width: 200,
        backgroundColor: back,
        color: fontColor,
      }}
    >
      {text}
    </div>
  );
};

export default MainResult;
