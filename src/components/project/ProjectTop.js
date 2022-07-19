import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectTop = ({ type }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="project-title">
        <h2>Project</h2>
      </div>
      <div className="sub-tab">
        <div className="inner">
          <div className="swiper-container">
            <ul className="swiper-wrapper">
              <li
                className={`swiper-slide ${type ? "" : "active"}`}
                onClick={() => navigate("/project")}
              >
                <a href onClick={() => navigate("/project")}>
                  All
                </a>
              </li>
              <li
                className={`swiper-slide ${type === "0" ? "active" : ""}`}
                onClick={() => navigate("/project/0")}
              >
                <a href onClick={(e) => e.preventDefault}>
                  관공서
                </a>
              </li>
              <li
                className={`swiper-slide ${type === "1" ? "active" : ""}`}
                onClick={() => navigate("/project/1")}
              >
                <a href onClick={(e) => e.preventDefault}>
                  교육기관
                </a>
              </li>
              <li
                className={`swiper-slide ${type === "2" ? "active" : ""}`}
                onClick={() => navigate("/project/2")}
              >
                <a href onClick={(e) => e.preventDefault}>
                  민간시설
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTop;
