import { useEffect, useState } from "react";
import "../CSS/category.css";

//component
import ProductDetails from "./ProductDetails";
import Review from "./Review";
import Inquiry from "./inquiry";
import Shipping from "./Shipping";

//antd
import { Tabs, ConfigProvider } from "antd";

const Category = (props) => {
  //props

  //해당 탭을 누를 시 이동할 탭 리스트
  const items = [
    {
      key: "1",
      label: "상품상세",
      children: <ProductDetails />,
    },
    {
      key: "2",
      label: "상품평",
      children: <Review />,
    },
    {
      key: "3",
      label: "상품문의",
      children: <Inquiry />,
    },
    {
      key: "4",
      label: "배송/교환/반품 안내",
      children: <Shipping />,
    },
  ];

  return (
    <>
      <div className="category">
        <ConfigProvider
          theme={{
            token: {},
            components: {
              // component token
              Tabs: {
                itemSelectedColor: "#000",
                itemHoverColor: "#000",
                titleFontSize: 16,
                inkBarColor: "none",
                cardGutter: 4,
                cardPadding: "10px 120px",
              },
            },
          }}
        >
          <Tabs defaultActiveKey="1" centered type="card" items={items} />
        </ConfigProvider>
      </div>
    </>
  );
};

export default Category;
