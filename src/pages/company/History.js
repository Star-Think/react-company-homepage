import React, { useEffect } from "react";
import CompanyTop from "../../components/company/CompanyTop";
import HisContent from "../../components/company/history/HisContent";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

const History = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `회사연혁 | (주)별생각`;
  }, []);
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
