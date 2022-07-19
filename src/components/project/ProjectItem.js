import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <li>
      <a href>
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
