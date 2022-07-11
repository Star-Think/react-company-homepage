import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";

const Home = () => {
  const [subMenuCheck, setSubMenuCheck] = useState(true);

  useEffect(() => {
    console.log(subMenuCheck);
  });

  return (
    <div id="wrapper" className={subMenuCheck ? "" : "menu-opened"}>
      <MainHeader setSubMenuCheck={setSubMenuCheck} />
    </div>
  );
};

export default Home;
