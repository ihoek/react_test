import "./MainStyle.css";

const Calculator = (props) => {
  // const { idValue, saveUserId } = props;
  // console.log("idvalue", idValue);
  // return (
  //   <div className="purple">
  //     <input
  //       type="text"
  //       className="id"
  //       placeholder="아이디를 입력하세요"
  //       value={idValue}
  //       onChange={saveUserId}
  //     />
  //   </div>
  // );
  const { setResult, first, second, plusinput, result, setFirst, setSecond } =
    props;
  console.log("props", props.plusinput);

  return (
    <div className="calculator">
      <input type="text" className="first" value={first} />
      <input type="text" className="second" value={second} />
      <button
        onClick={() => {
          plusinput();
        }}
      >
        결과
      </button>
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;
