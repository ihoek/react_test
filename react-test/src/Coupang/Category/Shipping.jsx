import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Rate, ConfigProvider, Input } from "antd";

//list
import {
  Shipping_information,
  exchange,
  restrictions,
  seller_information,
} from "./detailslst";

//component
import CategoryTable from "./CategoryTable";
import OtherColumn from "./OtherColumn";
import ProductColumn from "./ProductColumn";
import TooChoose from "./TooChoose";
import ProductCategtoy from "./ProductCategory";

//배송/교환/반품 안내 컴포넌트
const Shipping = (props) => {
  //props

  //변수 선언
  let left_lst = Shipping_information.filter((_, index) => index < 2);

  return (
    <>
      <div className="shipping_container">
        <div className="shipping_title">배송정보</div>
        <div className="shipping_title_top">
          <div className="shipping_title_left">
            {left_lst.map((element) => (
              <CategoryTable
                key={element.id}
                title={element.title}
                content={element.content}
              />
            ))}
          </div>
          <div className="shipping_title_right">
            <CategoryTable
              key={Shipping_information[2].id}
              title={Shipping_information[2].title}
              content={Shipping_information[2].content}
            />
          </div>
        </div>
        <div>
          <CategoryTable
            key={Shipping_information[3].id}
            title={Shipping_information[3].title}
            content={Shipping_information[3].content}
          />
        </div>

        <div className="shipping_title">교환/반품 안내</div>
        <div>
          <ul>
            <li>
              교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다 관계법령이
              우선합니다.
            </li>
            다만, 판매자의 제시사항이 관계법령보다 소비자에게 유리한 경우에는
            판매자 제시사항이 적용됩니다.
          </ul>
        </div>
        {exchange.map((element) => (
          <CategoryTable
            key={element.id}
            title={element.title}
            content={element.content}
          />
        ))}

        <div className="shipping_title">교환/반품 제한사항</div>
        <ul>
          <li>주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우</li>
          <li>
            상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가 훼손된
            경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
          </li>
          <li>
            고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가 현저히
            감소한 경우
          </li>
          <li>
            세트상품 일부 사용, 구성품을 분실하였거나 취급 부주의로 인한
            파손/고장/오염으로 재판매 불가한 경우
          </li>
          <li>
            모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 달라, 고객이
            단순 변심으로 교환/반품을 무료로 요청하는 경우
          </li>
          <li>
            제조사의 사정 (신모델 출시 등) 및 부품 가격 변동 등에 의해 무료
            교환/반품으로 요청하는 경우
          </li>
        </ul>
        <div className="shipping_policy">
          ※ 각 상품별로 아래와 같은 사유로 취소/반품이 제한될 수 있습니다.
        </div>
        {restrictions.map((element) => (
          <CategoryTable
            key={element.id}
            title={element.title}
            content={element.content}
          />
        ))}
        <div className="shipping_title">판매자 정보</div>
        {seller_information.map((element) => (
          <CategoryTable
            key={element.id}
            title={element.title}
            content={element.content}
          />
        ))}
        {/* 다른 고객 */}
        <div className="other_people">
          <OtherColumn type={"purchase"} />
        </div>
        {/* 다른 상품 */}
        <div className="other_people">
          <OtherColumn type={"things"} />
        </div>
        {/* 연관 추천 상품 */}
        <div className="other_people">
          <OtherColumn type={"recommendation"} />
        </div>
        {/* 전세계 핫딜 로켓직구 글로벌특가 */}
        <div className="pruduct_how">
          <ProductColumn type={"special"} />
        </div>
        {/* 고르고 골랐어요 */}
        <div className="tooChoose">
          <TooChoose />
        </div>
        {/* 이 상품과 관련된 카테고리 */}
        <div>
          <ProductCategtoy />
        </div>
      </div>
    </>
  );
};

export default Shipping;
