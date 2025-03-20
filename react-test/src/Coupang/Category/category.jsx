import { useEffect, useState } from "react";
import "../CSS/category.css";

//component
import ProductDetails from "./ProductDetails";

//antd
import { Tabs, ConfigProvider } from "antd";

const Category = (props) => {
  //props

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "상품상세",
      children: <ProductDetails />,
    },
    {
      key: "2",
      label: "상품평",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "상품문의",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "배송/교환/반품 안내",
      children: "Content of Tab Pane 4",
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
                cardPadding: "10px 120px",
              },
            },
          }}
        >
          <Tabs
            defaultActiveKey="1"
            centered
            type="card"
            items={items}
            onChange={onChange}
          />
        </ConfigProvider>
      </div>
    </>
  );
};

export default Category;
