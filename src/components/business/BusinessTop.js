import React from "react";

const BusinessTop = ({ topActive }) => {
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
                <a href="/sub/sub02_01.php">내진 준불연 단열일체형 패널</a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 2 ? "active" : ""}`}
              >
                <a href="/sub/sub02_02.php">SATIS(화장실 칸막이)</a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 3 ? "active" : ""}`}
              >
                <a href="/sub/sub02_03.php">SATIS 항균 불연패널</a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 4 ? "active" : ""}`}
              >
                <a href="/sub/sub02_04.php">PF단열재</a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 5 ? "active" : ""}`}
              >
                <a href="/sub/sub02_05.php">동화자연마루스쿨</a>
              </li>
              <li
                className={`swiper-slide  ${topActive === 6 ? "active" : ""}`}
              >
                <a href="/sub/sub02_06.php">동화자연마루 에코스택</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTop;
