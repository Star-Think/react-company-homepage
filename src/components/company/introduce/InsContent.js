import React from "react";

const InsContent = () => {
  return (
    <div id="contArea" className="full">
      <div className="sub-title">
        <h2>
          <span>회사개요</span>
        </h2>
      </div>
      <div className="real-cont" style={{ paddingBottom: 0 }}>
        <div className="overview">
          <div className="contain">
            <div className="headcopy">
              <h3 className="ff-ns">건축·사업분야를 선도하는 별생각입니다.</h3>
              <p>
                별생각의 강점은 건축·건설사업 분야에 걸쳐 다양한 제품과 서비스를
                제공하는 역랑에 있습니다.
              </p>
              <p>
                기능성 건축자재와 서비스를 제공함으로써 우리의 건축환경을 보다
                진보적으로 변화시키겠습니다.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <div className="cir">
                  <div className="cell">
                    <div className="ico">
                      <img src="/images/sub/ico_ovv1.png" alt="" />
                    </div>
                    <div className="tit ff-ns">건축 외장재</div>
                    <div className="txt">생산·유통·시공</div>
                  </div>
                </div>
                <div className="desc ff-ns">
                  <p>외장재 · 생산 · 유통 · 시공</p>
                </div>
              </div>
              <div className="col">
                <div className="cir">
                  <div className="cell">
                    <div className="ico">
                      <img src="/images/sub/ico_ovv2.png" alt="" />
                    </div>
                    <div className="tit ff-ns">건축 내장재</div>
                    <div className="txt">유통·시공사업</div>
                  </div>
                </div>
                <div className="desc ff-ns">
                  <p>내장재 · 생산 · 유통 · 시공</p>
                  <p>큐비클 · 생산 · 유통 · 시공</p>
                </div>
              </div>
              <div className="col">
                <div className="cir">
                  <div className="cell">
                    <div className="ico">
                      <img src="/images/sub/ico_ovv3.png" alt="" />
                    </div>
                    <div className="tit ff-ns">건설 건축자재</div>
                    <div className="txt">연구개발사업</div>
                  </div>
                </div>
                <div className="desc ff-ns">
                  <p>건축자재 연구</p>
                  <p>외장재 디자인</p>
                  <p>기능성 건축자재 개발</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsContent;
