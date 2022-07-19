import React, { useEffect } from "react";

const Sub4 = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `PF단열재 | (주)별생각`;
  }, []);
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">제품특징</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div className="table-wrap narrow">
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
                    <td rowspan="2">1200</td>
                    <td>600</td>
                    <td rowspan="2">25~130</td>
                  </tr>
                  <tr>
                    <td>2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="hr"></div>
            <div className="feature-tit">
              <h3>제품시공</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature4_01.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub4;
