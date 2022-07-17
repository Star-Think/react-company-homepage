import React from "react";
import { Route, Routes } from "react-router-dom";
import Sub1 from "../pages/business/Sub1";

const BusinessRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/sub1" element={<Sub1 />} />
      </Routes>
    </>
  );
};

export default BusinessRoute;
