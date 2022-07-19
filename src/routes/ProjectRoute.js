import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "../pages/project/ProjectPage";

const ProjectRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

export default ProjectRoute;
