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

  //useState
  const [titleSize, setTitleSize] = useState(16); //상품 헤더 폰크 사이즈
  const [titlePadding, setTitlePadding] = useState("10px 120px");

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

  //반응형
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setTitleSize(10);
        setTitlePadding("8px 80px");
      } else if (window.innerWidth <= 1024) {
        setTitleSize(14);
        setTitlePadding("8px 100px");
      } else {
        setTitleSize(16);
        setTitlePadding("10px 120px");
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
      <div className="category">
        <ConfigProvider
          theme={{
            token: {},
            components: {
              // component token
              Tabs: {
                itemSelectedColor: "#000",
                itemHoverColor: "#000",
                titleFontSize: { titleSize },
                inkBarColor: "none",
                cardGutter: 4,
                cardPadding: { titlePadding },
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
