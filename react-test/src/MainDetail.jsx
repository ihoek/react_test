import "./MainStyle.css";

/*
 * 작성자 : 누구
 * 작업 일시 : 2025.03.17
 * 작업 내용 : 메인페이지 아이템
 * props = {title : string, content : string}
 */
const MainDetail = (props) => {
  console.log("props : ", props);
  //const { number, sumNumber, miNumber } = props;

  // return (
  //   <div className="wrap-box">
  //     <div className="title">{props.data.title}</div>
  //     <div className="content">{props.data.content}</div>
  //   </div>
  // );

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         miNumber();
  //       }}
  //     >
  //       -
  //     </button>
  //     <div>{number}</div>
  //     <button
  //       onClick={() => {
  //         sumNumber();
  //       }}
  //     >
  //       +
  //     </button>
  //   </>
  // );
  const { number, setNumber, sumNumber, miNumber } = props;
  return (
    <div className="red">
      <button
        onClick={() => {
          sumNumber();
        }}
      >
        +
      </button>
      <div>{number}</div>
      <button
        onClick={() => {
          miNumber();
        }}
      >
        -
      </button>
    </div>
  );
};

export default MainDetail;
