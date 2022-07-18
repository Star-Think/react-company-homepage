import React from "react";

const Sub1_1 = () => {
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">INEX Wall Stone Panel</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="title">스톤(STONE)패널</div>
            <div className="feature-tit">
              <h3>제품개념</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_2_01.jpg" alt="" />
              </div>
            </div>
            <div className="hr"></div>
            <div className="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_2_02.jpg" alt="" />
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
                <img src="/images/sub/feature1_2_03.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub1_1;
