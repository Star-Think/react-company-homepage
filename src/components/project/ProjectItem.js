import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();
  return (
    <li>
      <a href onClick={() => navigate(`/detail/${project.idx}`)}>
        <div className="thumb">
          <img src={project.image} alt="" />
        </div>
        <div className="tit">{project.title}</div>
        <div className="hovercnt">
          <div className="hover-tt">{project.title}</div>
          <div className="more">VIEW PROJECT</div>
        </div>
      </a>
    </li>
  );
};

export default ProjectItem;
