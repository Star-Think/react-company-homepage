import React, { useEffect } from "react";
import CompanyTop from "../../components/company/CompanyTop";
import InsContent from "../../components/company/introduce/InsContent";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";

const Introduce = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `회사개요 | (주)별생각`;
  }, []);
  return (
    <>
      <MainHeader headerFix={true} />
      <CompanyTop activeCheck={1} />
      <div id="container">
        <InsContent />
        <MainFooter />
      </div>
    </>
  );
};

export default Introduce;
