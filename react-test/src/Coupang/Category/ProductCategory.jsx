import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Button, Rate, ConfigProvider } from "antd";

//list
import { productcategory } from "./detailslst";
//img

//component

// Import Swiper React components

// Import Swiper styles

const ProductCategory = (props) => {
  //props

  //useState

  //변수 선언

  return (
    <>
      <div>
        <span className="relevant">이 상품과 관련된 카테고리</span>
        <div className="relevant_container">
          {productcategory.map((element, index) => (
            <span key={index} className="relevant_element">
              {element.categroy}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
