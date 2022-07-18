import React from "react";

const Sub5 = () => {
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">제품특징</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature5_01.jpg" alt="" />
              </div>
            </div>
            <div className="table-wrap narrow">
              <table className="table01">
                <colgroup>
                  <col width="25%" span="4" />
                </colgroup>
                <thead>
                  <tr>
                    <th>종류</th>
                    <th>가로</th>
                    <th>세로</th>
                    <th>두께</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="2">Cutt Oak</td>
                    <td rowspan="2">190</td>
                    <td rowspan="2">1200</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td rowspan="2">Cutty Oak</td>
                    <td rowspan="2">140</td>
                    <td rowspan="2">1200</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td rowspan="2">Hard Maple</td>
                    <td rowspan="2">60</td>
                    <td rowspan="2">1800</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub5;
