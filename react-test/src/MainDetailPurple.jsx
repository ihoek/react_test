import "./MainStyle.css";

const MainDetailPurple = (props) => {
  const { idValue, saveUserId } = props;
  //console.log("idvalue", idValue);
  return (
    <div className="purple">
      <input
        type="text"
        className="id"
        placeholder="아이디를 입력하세요"
        value={idValue}
        onChange={saveUserId}
      />
    </div>
  );
};

export default MainDetailPurple;
