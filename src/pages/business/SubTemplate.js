import React from "react";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";
import BusinessImageTop from "../../components/business/BusinessImageTop";
import BusinessMidTop from "../../components/business/BusinessMidTop";
import BusinessSub1 from "../../components/business/BusinessSub1";
import BusinessTop from "../../components/business/BusinessTop";

const SubTemplate = ({
  contentObj,
  subTabCheck,
  subMidTop,
  BusinessSubImage,
  topActive,
  Content,
  imageTopCheck,
}) => {
  return (
    <>
      <MainHeader headerFix={true} />
      <div id="container">
        <div id="contArea" className="full">
          <div className="real-cont pd">
            <BusinessTop topActive={topActive} />
            <BusinessMidTop
              contentObj={contentObj}
              subTabCheck={subTabCheck}
              subTabActive={subMidTop}
            />
            {imageTopCheck ? (
              <BusinessImageTop ImageAll={BusinessSubImage} />
            ) : null}

            <Content />
          </div>
        </div>
        <MainFooter />
      </div>
    </>
  );
};

SubTemplate.defaultProps = {
  topActive: 1,
  imageTopCheck: true,
};

export default SubTemplate;
