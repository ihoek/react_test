import { useEffect, useState } from "react";
import "./HowProduct.css";

//antd
import { Button } from "antd";

//list
import { how_product } from "./detailslst";

//component
import HowProduct from "./HowProduct";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductColumn = (props) => {
  //props
  const { type } = props;

  //useState
  const [mainTitle, setMainTitle] = useState("");
  const [sliderStlyeSize, setSliderStyleSize] = useState(5);

  useEffect(() => {
    if (type === "how") {
      setMainTitle("이런 상품은 어때요?");
    } else if (type === "over") {
      setMainTitle("4점 이상 리뷰가 좋은 상품");
    } else if (type === "special") {
      setMainTitle("전세계 핫딜 로켓직구 글로벌특가");
    }
  }, []);

  //반응형
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setSliderStyleSize(4);
      } else if (window.innerWidth <= 1024) {
        setSliderStyleSize(6);
      } else {
        setSliderStyleSize(8);
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

      <div className="how_products">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={sliderStlyeSize}
        >
          {how_product.map((element) => (
            <SwiperSlide key={element.id}>
              <HowProduct
                key={element.id}
                imgsrc={element.imgsrc}
                title={element.title}
                price={element.price}
                discount={element.discount}
                review={element.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductColumn;
