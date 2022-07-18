import React from "react";
import BusinessImageItem from "./BusinessImageItem";

const BusinessSub3 = () => {
  return (
    <div class="row">
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo3_1.png"}
        title={"Semi-Fireproof"}
        content={"KSF 2271 시험에 따른 준불연자재 \nKFI인정 난연1급 자재"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo3_2.png"}
        title={"Durability"}
        content={
          "표면 물성이 강한 멜라민층 적용 \n뛰어난 내오염성, 내스크래치성"
        }
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo3_3.png"}
        title={"Easy Installation"}
        content={"기존 벽체를 철거하지 않고 \n표면 마감이 가능"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo3_4.png"}
        title={"Safety"}
        content={"항균 기본 유해물질 노출 안전"}
      />
    </div>
  );
};

export default BusinessSub3;
