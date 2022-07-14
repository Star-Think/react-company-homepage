import React, { useEffect, useState } from "react";
import MainBanner from "../components/home/MainBanner";
import MainContent from "../components/home/MainContent";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

const Home = () => {
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
