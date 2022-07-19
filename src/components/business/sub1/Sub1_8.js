import React, { useEffect } from "react";

const Sub1_8 = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `내진 준불연 단열일체형 패널 | (주)별생각`;
  }, []);
  return (
    <>
      <div class="doc-cnt">
        <div class="blt-tit">STAR Wall Panel Bricks</div>
        <div class="contain">
          <div class="feature-zone">
            <div class="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div class="img-cnt">
              <div class="thumb">
                <img src="/images/sub/feature1_9_01.jpg" alt="" />
              </div>
            </div>
            <div class="table-wrap">
              <table class="table01">
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
                    <td rowspan="4">1250</td>
                    <td rowspan="4">414</td>
                    <td>64T</td>
                  </tr>
                  <tr>
                    <td>80T</td>
                  </tr>
                  <tr>
                    <td>101T</td>
                  </tr>
                  <tr>
                    <td>140T</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-cnt">
        <div class="blt-tit">COLOR</div>
        <div class="contain">
          <div class="feature-zone">
            <div class="img-cnt">
              <div class="thumb">
                <img src="/images/sub/feature1_9_02.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub1_8;
