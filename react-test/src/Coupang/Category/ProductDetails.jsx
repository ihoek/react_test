import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Button } from "antd";

//image
import mainImage from "../../img/miancontent.jpg";

//list

//component
import DetailRow from "./DetailRow";
import ProductColumn from "./ProductColumn";
import OtherColumn from "./OtherColumn";

const ProductDetails = (props) => {
  //props

  //useState
  const [isSwitched, setIsSwitced] = useState(false); //상품정보 더보기 버튼 클릭
  const [btnText, setBtnText] = useState("상품정보 더보기");
  const [heightSize, setHeightSizea] = useState("1300px");

  //상품정보 더보기 클릭
  const moreView = () => {
    setIsSwitced(!isSwitched);
    if (isSwitched === false) {
      setBtnText("상품정보 더보기");
    } else {
      setBtnText("상품정보 접기");
    }
  };

  //반응형
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setHeightSizea("600px");
      } else if (window.innerWidth <= 1024) {
        setHeightSizea("800px");
      } else {
        setHeightSizea("1300px");
      }
    };

    // 초기 로드 시 크기 설정
    handleResize();

    // 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // cleanup (이벤트 리스너 제거)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="details_table">
        <DetailRow />
      </div>
      <div
        className="productdetail_container"
        style={
          ({ overflow: isSwitched ? "visible" : "hidden" },
          { height: isSwitched ? "100%" : heightSize })
        }
      >
        <div className="productdetails">
          <img className="imgstyle" src={mainImage} alt="main image" />
        </div>
      </div>
      <div className="productbtn">
        <Button
          className="option_btn"
          onClick={() => {
            moreView();
          }}
        >
          {btnText}
        </Button>
      </div>
      <div className="pruduct_how">
        <ProductColumn type={"how"} />
      </div>
      <div className="other_people">
        <OtherColumn type={"other"} />
      </div>
    </>
  );
};

export default ProductDetails;
