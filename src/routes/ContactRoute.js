import React from "react";
import { Route, Routes } from "react-router-dom";
import MapPage from "../pages/contact/MapPage";

const ContactRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MapPage />} />
      </Routes>
    </>
  );
};

export default ContactRoute;
