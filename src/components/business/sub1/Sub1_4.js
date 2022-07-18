import React from "react";

const Sub1_4 = () => {
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">INEX Wall Ceramic Panel</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="title">세라믹(CERAMIC) 패널</div>
            <div className="feature-tit">
              <h3>제품개념</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_5_01.jpg" alt="" />
              </div>
            </div>
            <div className="hr"></div>
            <div className="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature1_5_02.jpg" alt="" />
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
                    <td rowspan="4">805(1005)</td>
                    <td rowspan="4">400(600)</td>
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
                <img src="/images/sub/feature1_5_03.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub1_4;
