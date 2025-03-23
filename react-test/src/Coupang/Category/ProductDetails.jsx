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

  //상품정보 더보기 클릭
  const moreView = () => {
    setIsSwitced(!isSwitched);
    if (isSwitched === false) {
      setBtnText("상품정보 더보기");
    } else {
      setBtnText("상품정보 접기");
    }
  };

  return (
    <>
      <div className="details_table">
        <DetailRow />
      </div>
      <div
        className="productdetail_container"
        style={
          ({ overflow: isSwitched ? "visible" : "hidden" },
          { height: isSwitched ? "100%" : "1300px" })
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
