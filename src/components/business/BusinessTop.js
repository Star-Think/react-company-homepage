import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessTop = ({ topActive }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="doc-tit">사업분야</div>
      <div className="sub-tab">
        <div className="inner">
          <div className="swiper-container">
            <ul className="swiper-wrapper">
              <li
                className={`swiper-slide  ${topActive === 1 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1")}>
                  내진 준불연 단열일체형 패널
                </a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 2 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub2")}>
                  SATIS(화장실 칸막이)
                </a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 3 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub3")}>
                  SATIS 항균 불연패널
                </a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 4 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub4")}>
                  PF단열재
                </a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 5 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub5")}>
                  동화자연마루스쿨
                </a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 6 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub6")}>
                  동화자연마루 에코스택
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTop;
