import "./MainStyle.css";

const MainDetailTrans = (props) => {
  const { hello, setHello, Trans } = props;

  return (
    <div className="orange">
      <button
        onClick={() => {
          Trans();
        }}
      >
        번역
      </button>
      <div>{hello}</div>
    </div>
  );
};

export default MainDetailTrans;
