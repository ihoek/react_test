import { useEffect, useState } from "react";
import "../CSS/category.css";

//antd
import { Rate, ConfigProvider, Button } from "antd";

//component
import Question from "./question";
import Answer from "./Answer";

//list
import { answerlst } from "./detailslst";

//상품문의 COMPONTENT
const Inquiry = (props) => {
  //props

  //변수 선언

  return (
    <>
      <div className="inquiry">
        <div className="inquiry_title">
          <div className="title">상품문의</div>
          <Button className="option_btn">문의하기</Button>
        </div>
        <div>
          <ul>
            <li>
              구매한 상품의취소/반품은 마이쿠팡 구매내역에서 신청 가능합니다.
            </li>
            <li>
              상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지
              않습니다.
            </li>
            <li>
              가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는
              문의는 고객센터 내 1:1 문의하기 를 이용해주세요.
            </li>
            <li>
              "해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배
              등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수
              있습니다.
            </li>
            <li>
              공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한
              개인정보는 절대 남기지 말아주세요.
            </li>
          </ul>
        </div>
        <div>
          {/* 답변 */}
          {answerlst.map((element) => (
            <>
              <Question
                key={element.question.id}
                content={element.question.content}
                color={element.question.color}
                size={element.question.size}
                date={element.question.date}
              />

              <Answer
                key={element.answer.id}
                content={element.answer.content}
                color={element.answer.color}
                size={element.answer.size}
                date={element.answer.date}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Inquiry;
