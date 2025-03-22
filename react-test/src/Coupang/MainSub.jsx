import { useEffect, useState } from "react";
import "../App.css";
import "../MainStyle.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//component
import SubElement from "./SubElement";

//image
import sellor1 from "../img/seller1.jpg";
import sellor2 from "../img/seller2.jpg";
import sellor3 from "../img/seller3.jpg";
import sellor4 from "../img/seller4.jpg";
import sellor5 from "../img/seller5.jpg";
import sellor6 from "../img/seller6.jpg";
import sellor7 from "../img/seller7.jpg";
import sellor8 from "../img/seller8.jpg";
import sellor9 from "../img/seller9.jpg";
import sellor10 from "../img/seller10.jpeg";

//페이지 하단 component
const MainSub = (props) => {
  //오늘의 판매자 특가 배열

  const special_lst = [
    {
      id: 1,
      title:
        "숙면에 눕다 고정밴드 알러지케어 진드기방지 누빔 항균 침대패드 SS Q 슈퍼싱글 퀸, 라이트그레이",
      origin_price: 109900,
      discount_price: 39380,
      discount: "64%",
      goal: 98,
      imgsrc: sellor1,
    },
    {
      id: 2,
      title: "프리미엄 오가닉 순면 호텔식 이불 세트, 화이트",
      origin_price: 159000,
      discount_price: 59900,
      discount: "62%",
      goal: 85,
      imgsrc: sellor2,
    },
    {
      id: 3,
      title: "초극세사 따뜻한 겨울 차렵이불 세트, 그레이",
      origin_price: 249000,
      discount_price: 89900,
      discount: "64%",
      goal: 92,
      imgsrc: sellor3,
    },
    {
      id: 4,
      title: "사계절용 통기성 좋은 홑이불, 네이비",
      origin_price: 89000,
      discount_price: 31900,
      discount: "64%",
      goal: 88,
      imgsrc: sellor4,
    },
    {
      id: 5,
      title: "알러지 케어 방수 매트리스 커버, 베이지",
      origin_price: 69000,
      discount_price: 25900,
      discount: "62%",
      goal: 95,
      imgsrc: sellor5,
    },
    {
      id: 6,
      title: "100% 오가닉 코튼 항균 차렵이불, 아이보리",
      origin_price: 49000,
      discount_price: 19900,
      discount: "59%",
      goal: 90,
      imgsrc: sellor6,
    },
    {
      id: 7,
      title: "고급형 전기요 온열 패드, 브라운",
      origin_price: 59000,
      discount_price: 27900,
      discount: "53%",
      goal: 87,
      imgsrc: sellor7,
    },
    {
      id: 8,
      title: "초경량 극세사 이불 포근한 겨울 이불, 와인",
      origin_price: 89000,
      discount_price: 34900,
      discount: "61%",
      goal: 93,
      imgsrc: sellor8,
    },
    {
      id: 9,
      title: "3D 입체 패턴 구스다운 이불, 라이트블루",
      origin_price: 129000,
      discount_price: 49900,
      discount: "61%",
      goal: 89,
      imgsrc: sellor9,
    },
    {
      id: 10,
      title: "양면 사용 가능한 리버시블 차렵이불, 차콜",
      origin_price: 29000,
      discount_price: 9900,
      discount: "66%",
      goal: 97,
      imgsrc: sellor10,
    },
  ];

  return (
    <>
      <div className="main_sub">
        <div className="sub_title">
          오늘의 <span className="special_price">판매자 특가</span>
        </div>

        {/* 오늘의 판매자 특가 */}
        <div className="sub_swiper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={5}

            //onSlideChange={() => console.log("slide change")}
            //onSwiper={(swiper) => console.log(swiper)}
          >
            {special_lst.map((element) => (
              <SwiperSlide>
                <SubElement
                  imgsrc={element.imgsrc}
                  title={element.title}
                  discount={element.discount}
                  origin_price={element.origin_price}
                  discount_price={element.discount_price}
                  goal={element.goal}
                  key={element.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainSub;
