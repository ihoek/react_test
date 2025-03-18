import "./MainStyle.css";
import { Button, Select, Space, Input } from "antd";

const MainImg = (props) => {
  const { fruit } = props;

  return (
    <div>
      <img style={{ width: 200, height: 200 }} src={fruit} alt="apple" />
    </div>
  );
};

export default MainImg;
