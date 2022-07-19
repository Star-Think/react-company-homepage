import React, { useEffect } from "react";

const Sub1_3 = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `내진 준불연 단열일체형 패널 | (주)별생각`;
  }, []);
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">STAR Wall Terra-Cotta Panel</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="title">테라코타(TERRA-COTTA) 패널</div>
            <div className="feature-tit">
              <h3>제품개념</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_4_01.jpg" alt="" />
              </div>
            </div>
            <div className="hr"></div>
            <div className="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_4_02.jpg" alt="" />
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
                    <td rowspan="4">805</td>
                    <td rowspan="4">400</td>
                    <td>68T</td>
                  </tr>
                  <tr>
                    <td>84T</td>
                  </tr>
                  <tr>
                    <td>107T</td>
                  </tr>
                  <tr>
                    <td>142T</td>
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
                <img src="/images/sub/feature1_4_03.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub1_3;
