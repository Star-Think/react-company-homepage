import React, { useEffect } from "react";
import MainBanner from "../components/home/MainBanner";
import MainContent from "../components/home/MainContent";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `(주)별생각`;
  }, []);
  return (
    <>
      <MainHeader />
      <div id="container">
        <MainBanner />
        <MainContent />
        <MainFooter />
      </div>
    </>
  );
};

export default Home;
