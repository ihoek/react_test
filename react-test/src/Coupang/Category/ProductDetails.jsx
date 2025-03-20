import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import {} from "antd";

//image
import mainImage from "../../img/miancontent.jpg";

const ProductDetails = (props) => {
  //props

  return (
    <>
      <div className="productdetails">
        <img className="imgstyle" src={mainImage} alt="main image" />
      </div>
    </>
  );
};

export default ProductDetails;
