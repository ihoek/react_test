import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import {} from "antd";

//image
import mainImage from "../../img/miancontent.jpg";

//component
import DetailRow from "./DetailRow";

const ProductDetails = (props) => {
  //props

  return (
    <>
      <div className="details_table">
        <DetailRow />
      </div>
      <div className="productdetails">
        <img className="imgstyle" src={mainImage} alt="main image" />
      </div>
    </>
  );
};

export default ProductDetails;
