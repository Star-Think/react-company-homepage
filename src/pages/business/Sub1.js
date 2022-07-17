import React from "react";
import BusinessImageItem from "../../components/business/BusinessImageItem";
import BusinessImageTop from "../../components/business/BusinessImageTop";
import BusinessMidTop from "../../components/business/BusinessMidTop";
import BusinessTop from "../../components/business/BusinessTop";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

const Sub1 = () => {
  const contentObj = {
    title: "내진 준불연 단열일체형 패널",
    content: `단열재와 외장재가 일체화된 패널형 제품으로, 외단열 공법으로 단열
    공간을 절약하여 실내공간 확보에 유리하고, 공사기간을 단축 시킬 수
    있습니다.`,
  };

  const ImageAll = () => {
    return (
      <div class="row">
        <BusinessImageItem
          imageSrc={"/images/sub/ico_bsnsinfo4_1.png"}
          title={"고성능 단열"}
          content={"열전도율 0.020 W/m·K \n일반 단열재 대비 ½ 두께 감소"}
        />
        <BusinessImageItem
          imageSrc={"/images/sub/ico_bsnsinfo1_1.png"}
          title={"화재 안정성"}
          content={
            "실사용 환경에 대한 화재의 안정성을\n 강화하기 위하여 불연 표면재, 배면재, \n측면재를 사용, 화재의 위험성을 \n최소화 하였으며, 자기소화성 물질을 \n첨가하여 화염 전파 방지"
          }
        />
        <BusinessImageItem
          imageSrc={"/images/sub/ico_bsnsinfo1_2.png"}
          title={"내진 성능"}
          content={
            "경량성, Interlocking 체결 \n구조를 통하여 면단위로 \n지진력을 상쇄 시키는 구조"
          }
        />
        <BusinessImageItem
          imageSrc={"/images/sub/ico_bsnsinfo1_3.png"}
          title={"단열 성능"}
          content={
            "배면 CRC 보드를 통한 고정 방식과\n혀&홈 구조로 열교 현상 최소화"
          }
        />
        <BusinessImageItem
          imageSrc={"/images/sub/ico_bsnsinfo4_5.png"}
          title={"친환경성"}
          content={"녹색 건축 인증 \n3개영역 가산점 부여"}
        />
      </div>
    );
  };

  return (
    <>
      <MainHeader headerFix={true} />
      <div id="container">
        <div id="contArea" className="full">
          <div className="real-cont pd">
            <BusinessTop topActive={1} />
            <BusinessMidTop contentObj={contentObj} subTabCheck={true} />
            <BusinessImageTop ImageAll={ImageAll} />
          </div>
        </div>
        <MainFooter />
      </div>
    </>
  );
};

export default Sub1;
