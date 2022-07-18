import React from "react";
import ContentMap from "../../components/contact/ContentMap";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

const MapPage = () => {
  return (
    <>
      <MainHeader headerFix={true} />
      <div id="container">
        <div id="contArea" className="full">
          <div className="real-cont pd">
            <div className="doc-tit">Contact Us</div>
            <ContentMap
              title={"본사"}
              locName={"부평역"}
              lan={37.48947299639476}
              lat={126.7241710017216}
            />
            <ContentMap
              title={"지부"}
              locName={"부평역"}
              lan={37.48947299639476}
              lat={126.7241710017216}
            />
          </div>
        </div>
        <MainFooter />
      </div>
    </>
  );
};

export default MapPage;
