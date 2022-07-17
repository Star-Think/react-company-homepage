import React from "react";

const BusinessMidTop = ({ contentObj, subTabCheck }) => {
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
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_02.php">STONE</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_03.php">BRICKS</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_04.php">TERRACOTTA</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_05.php">CERAMIC</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_06.php">ALCP</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_07.php">CRC</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_08.php">CMP</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_09.php">합성목재</a>
              </li>
              <li className="swiper-slide ">
                <a href="/sub/sub02_01_10.php">디자인 패널</a>
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
