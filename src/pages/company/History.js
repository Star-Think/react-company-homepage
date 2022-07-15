import React from "react";
import CompanyTop from "../../components/company/CompanyTop";
import HisContent from "../../components/company/history/HisContent";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

const History = () => {
  return (
    <>
      <MainHeader headerFix={true} />
      <CompanyTop activeCheck={2} />
      <div id="container">
        <HisContent />
        <MainFooter />
      </div>
    </>
  );
};

export default History;
