import React from "react";

const HisContent = () => {
  return (
    <div id="contArea" className="full">
      <div className="sub-title">
        <h2>
          <span>회사연혁</span>
        </h2>
      </div>
      <div className="real-cont">
        <div className="history">
          <div className="contain">
            <div className="headcopy">
              <h3 className="ff-ns">
                혁신과 새로운 건축문화를 인도하는 발자취
              </h3>
              <p>
                지난 2002년 내장재 사업 시작으로, 별생각은 고객들에게 필요한
                기업이 되자는 일념 하에 지금까지 성장 해왔습니다.
              </p>
              <p>
                이제는 새로운 외장재를 건축시장에 선보이며, 보다 더 안전하고
                친환경적인 건축시장을 선도하는 리딩기업으로 앞장 서겠습니다.
              </p>
            </div>
          </div>
          <div className="img">
            <div className="col">
              <img src="/images/sub/hstr1.jpg" alt="" />
            </div>
            <div className="col">
              <img src="/images/sub/hstr2.jpg" alt="" />
            </div>
            <div className="col">
              <img src="/images/sub/hstr3.jpg" alt="" />
            </div>
          </div>
          <div className="record">
            <ul>
              <li>
                <div className="year ff-ns">2002</div>
                <div className="txt">
                  <p>(주)별생각 창업</p>
                  <p>전문 건설업 면허 취득</p>
                </div>
              </li>
              <li>
                <div className="year ff-ns">2005</div>
                <div className="txt">
                  <p>내장재 사업 개시</p>
                </div>
              </li>
              <li>
                <div className="year ff-ns">2008</div>
                <div className="txt">
                  <p>준불연단열재일체형 패널 유통·시공</p>
                  <p>화장실 칸막이(Cubicle) 조달등록</p>
                </div>
              </li>
              <li>
                <div className="year ff-ns">2009</div>
                <div className="txt">
                  <p>공장 신설</p>
                </div>
              </li>
              <li>
                <div className="year ff-ns">2017</div>
                <div className="txt">
                  <p>(주)별생각으로 상호변경</p>
                  <p>연구개발 전담부서 런칭</p>
                </div>
              </li>
              <li>
                <div className="year ff-ns">2018</div>
                <div className="txt">
                  <p>제조업 공정등록</p>
                  <p>건축물 조립공사 면허 취득</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HisContent;
