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
  const [datalst, setDataLst] = useState("");

  useEffect(() => {
    if (type === "how") {
      setMainTitle("이런 상품은 어때요?");
      setDataLst(how_product);
    } else if (type === "other") {
      setMainTitle("다른 고객이 함께 본 상품");
      setDataLst(how_product);
    }
  }, []);

  console.log("datalst", datalst);
  return (
    <>
      <div className="main_title_div">
        <span className="maintitle">{mainTitle}</span>
      </div>

      <div className="how_products">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={9}

          //onSlideChange={() => console.log("slide change")}
          //onSwiper={(swiper) => console.log(swiper)}
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
