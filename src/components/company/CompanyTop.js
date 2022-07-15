import React from "react";
import { useNavigate } from "react-router-dom";

const CompanyTop = ({ activeCheck }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sub-visual bg1">
        <div className="tit">
          <h3>새로운 가치 창조, 혁신과 변화를 통한</h3>
          <h2>Leading Company</h2>
          <p>
            이넥스월은 시대의 변화에 앞서, 고객이 원하고, 필요로 하는, 더 나은
            제품들을 한국 시장에 선보였습니다.
          </p>
          <p>
            에너지 효율을 높이고 유한한 천연자원을 보존하는 친환경 기술을
            기반으로, <br />
            생활공간의 쾌적함과 미학적 즐거움 및 풍부한 공간적 경험을 지향하는
            제품을 개발하고 제공하는 것이 <br />
            저희 이넥스월이 추구하는 가치입니다.
          </p>
        </div>
      </div>
      <div id="lnb" className="lnb">
        <div className="swiper-container">
          <ul className="swiper-wrapper">
            <li className={`swiper-slide ${activeCheck === 1 ? "active" : ""}`}>
              <a href onClick={() => navigate("/company/introduce")}>
                회사개요
              </a>
            </li>
            <li className={`swiper-slide ${activeCheck === 2 ? "active" : ""}`}>
              <a href onClick={() => navigate("/company/history")}>
                회사연혁
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

CompanyTop.defaultProps = {
  activeCheck: 1,
};

export default CompanyTop;
