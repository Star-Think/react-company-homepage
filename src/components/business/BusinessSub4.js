import React from "react";
import BusinessImageItem from "./BusinessImageItem";

const BusinessSub4 = () => {
  return (
    <div class="row">
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo4_1.png"}
        title={"고성능 단열"}
        content={"열전도율 0.020 W/m·K \n일반 단열재 대비 ½ 두께 감소"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo4_2.png"}
        title={"화재 안전성"}
        content={"준불연 등급 내화 15분 성적서 확보"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo4_3.png"}
        title={"장기성능유지"}
        content={"25년 사용시 \n성능 90% 수준 유지"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo4_4.png"}
        title={"경제성"}
        content={"건축물 공간 활용 증대 \n및 냉/난방비 절감"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo4_5.png"}
        title={"친환경성"}
        content={"녹색 건축 인증 \n3개영역 가산점 부여"}
      />
    </div>
  );
};

export default BusinessSub4;
