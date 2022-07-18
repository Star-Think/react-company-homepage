import React from "react";
import BusinessImageItem from "./BusinessImageItem";

const BusinessSub2 = () => {
  return (
    <div class="row">
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo2_1.png"}
        title={"Experience"}
        content={"최다실적 고객선택 제품"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo2_2.png"}
        title={"Eco-Friendly"}
        content={"환경표지 인증 획득"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo2_3.png"}
        title={"Installation Profession"}
        content={"직영 시공팀 운영"}
      />
      <BusinessImageItem
        imageSrc={"/images/sub/ico_bsnsinfo2_4.png"}
        title={"Design Support"}
        content={"전담 디자인팀 운영 디자인 데이터 확보"}
      />
    </div>
  );
};

export default BusinessSub2;
