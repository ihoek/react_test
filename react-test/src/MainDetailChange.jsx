import "./MainStyle.css";

const MainDetailChange = (props) => {
  const { changevalue } = props;
  console.log("cha", changevalue);
  return (
    <div className="yello">
      <div>{changevalue("노랑색")}</div>
    </div>
  );
};

export default MainDetailChange;
