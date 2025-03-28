import { useEffect, useState } from "react";
import "./OtherProduct.css";

//antd
import { Button } from "antd";

//list
import { other_product } from "./detailslst";

//component
import OtherProduct from "./OtherProduct";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OtherColumn = (props) => {
  //props
  const { type } = props;

  //useState
  const [mainTitle, setMainTitle] = useState("");
  const [sliderStlyeSize, setSliderStyleSize] = useState(5);

  useEffect(() => {
    if (type === "other") {
      setMainTitle("다른 고객이 함께 본 상품");
      //setDataLst(how_product);
    } else if (type === "purchase") {
      setMainTitle("다른 고객이 함께 구매한 상품");
    } else if (type === "things") {
      setMainTitle("코멧의 다른 상품들");
    } else if (type === "recommendation") {
      setMainTitle("연관 추천 상품");
    }
  }, []);

  //반응형
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setSliderStyleSize(3);
      } else if (window.innerWidth <= 1024) {
        setSliderStyleSize(4);
      } else {
        setSliderStyleSize(5);
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
      <div className="main_title_div">
        <span className="maintitle">{mainTitle}</span>
      </div>

      <div className="other_products">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={sliderStlyeSize}
        >
          {other_product.map((element) => (
            <SwiperSlide key={element.id}>
              <OtherProduct
                key={element.id}
                imgsrc={element.imgsrc}
                title={element.title}
                price={element.price}
                review={element.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OtherColumn;
