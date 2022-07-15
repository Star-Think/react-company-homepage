import React from "react";
import { Route, Routes } from "react-router-dom";
import History from "../pages/company/History";
import Introduce from "../pages/company/Introduce";

const CompanyRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/introduce" element={<Introduce />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default CompanyRoute;
