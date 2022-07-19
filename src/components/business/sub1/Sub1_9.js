import React, { useEffect } from "react";

const Sub1_9 = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `내진 준불연 단열일체형 패널 | (주)별생각`;
  }, []);
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">디자인패널</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_10_01.jpg" alt="" />
              </div>
            </div>
            <div className="table-wrap">
              <table className="table01">
                <colgroup>
                  <col width="33.3333%" span="3" />
                </colgroup>
                <thead>
                  <tr>
                    <th>가로</th>
                    <th>세로</th>
                    <th>두께</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1200</td>
                    <td>600</td>
                    <td>50T</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="doc-cnt">
        <div className="blt-tit">COLOR</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_10_02.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub1_9;
