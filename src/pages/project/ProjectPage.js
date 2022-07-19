import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";
import ProjectList from "../../components/project/ProjectList";
import ProjectTop from "../../components/project/ProjectTop";

const ProjectPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      typeof type !== "undefined" &&
      type !== "0" &&
      type !== "1" &&
      type !== "2"
    ) {
      alert("해당 페이지는 존재하지 않습니다.");
      navigate(-1);
    }
  }, []);

  return (
    <>
      <MainHeader headerFix={true} />
      <div id="container">
        <div id="contArea" className="full">
          <div className="real-cont pd">
            <ProjectTop type={type} />
            <ProjectList type={type} />
          </div>
        </div>
        <MainFooter />
      </div>
    </>
  );
};

export default ProjectPage;
