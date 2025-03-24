import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Button, Rate, ConfigProvider } from "antd";

//list
import bed1 from "../../img/bed1_color1.jpg";

//img
import adbtn from "../../img/coupang_ad_btn.png";

//component

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TooChoose = (props) => {
  //props
  const { type } = props;

  //useState

  //변수 선언
  const [starvalue, setStarValue] = useState(5); //별점 변수

  return (
    <>
      <div>
        {/* title */}
        <div className="choose_title">
          <span className="choose_title_main">고르고 골랐어요</span>
          <span className="advertising">광고</span>
        </div>
        {/* content */}
        <div className="choose_content">
          <div className="content_left">
            <div className="choose_img">
              <img className="imgstyle" src={bed1} alt="bed" />
            </div>
            <div className="content_right">
              <div className="choose_sub">
                <span>
                  <ConfigProvider
                    theme={{
                      token: {},
                      components: {
                        // component token
                        Rate: {
                          starSize: 30,
                        },
                      },
                    }}
                  >
                    <Rate value={starvalue} disabled={true} />
                  </ConfigProvider>
                </span>
                <span className="choose_review">(1,048)</span>
              </div>
              <div className="choose_text">
                디오프 향균 알러지케어 먼지없는 차렵이불
              </div>
            </div>
          </div>
          <div className="choose_adbtn">
            <img className="imgstyle" src={adbtn} alt="adbtn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TooChoose;
