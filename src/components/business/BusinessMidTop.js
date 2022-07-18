import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessMidTop = ({ contentObj, subTabCheck, subTabActive }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="depth2-tit">
        <h3>
          <span>{contentObj.title}</span>
        </h3>
      </div>
      {subTabCheck ? (
        <div className="third-tab">
          <div className="swiper-container">
            <ul className="swiper-wrapper">
              <li
                className={`swiper-slide ${subTabActive === 1 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/1")}>
                  STONE
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 2 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/2")}>
                  BRICKS
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 3 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/3")}>
                  TERRACOTTA
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 4 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/4")}>
                  CERAMIC
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 5 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/5")}>
                  ALCP
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 6 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/6")}>
                  CRC
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 7 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/7")}>
                  CMP
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 8 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/8")}>
                  합성목재
                </a>
              </li>
              <li
                className={`swiper-slide ${subTabActive === 9 ? "active" : ""}`}
              >
                <a href onClick={() => navigate("/business/sub1/9")}>
                  디자인 패널
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="doc-cnt">
        <div className="headcopy">
          <p>{contentObj.content}</p>
        </div>
      </div>
    </>
  );
};

export default BusinessMidTop;
