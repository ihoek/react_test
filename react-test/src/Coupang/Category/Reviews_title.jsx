import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Input, Select, Rate, ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: (
      <div className="review_rate">
        <a>모든 별점 보기</a>
        <span>14,998</span>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <a>
          최고 <Rate value={5} disabled={true} />
        </a>
        <span>12,074</span>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        <a>
          좋음 <Rate value={4} disabled={true} />
        </a>
        <span>1,927</span>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div>
        <a>
          보통 <Rate value={3} disabled={true} />
        </a>
        <span>670</span>
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div>
        <a>
          별로 <Rate value={2} disabled={true} />
        </a>
        <span>187</span>
      </div>
    ),
  },
  {
    key: "6",
    label: (
      <div>
        <a>
          나쁨 <Rate value={1} disabled={true} />
        </a>
        <span>140</span>
      </div>
    ),
  },
];

const ReviewTitle = (props) => {
  const {} = props;

  //변수
  const [value, setValue] = useState("1");

  return (
    <>
      <div className="reviewtitle_container">
        <div>
          <span className="best">베스트순 </span>
          <span className="distinguished ">|</span>
          <span className="latest"> 최신순</span>
        </div>
        <div className="serach_container">
          <span>
            <input
              type="text"
              className="search"
              placeholder="상품평을 검색해보세요."
            />
          </span>
          <span className="dropdown_div">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <div className="dropdown">
                  <span>모든 별점 보기</span>
                  <span>
                    14,998 <DownOutlined />
                  </span>
                </div>
              </a>
            </Dropdown>
          </span>
        </div>
      </div>
    </>
  );
};

export default ReviewTitle;
