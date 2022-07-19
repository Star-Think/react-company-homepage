import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";
import { projectList } from "../../utils/ProjectData";

const ProjectDetail = () => {
  const { idx } = useParams();
  const [pData, setPData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const data = projectList.find((it) => it.idx === idx);
    if (!data) {
      alert("데이터가 없습니다.");
      navigate(-1);
    }
    setPData(data);
  }, [idx]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `상세보기 | (주)별생각`;
  }, []);
  return (
    <>
      <MainHeader headerFix={true} />
      <div id="container">
        <div id="contArea">
          <div className="real-cont pd">
            <div className="project-view">
              <div className="head">
                <h3 className="tit">{pData.title}</h3>
                <div className="info">
                  <p>
                    <span className="tt">Location</span> : {pData.loc}
                  </p>
                  <p>
                    <span className="tt">Product</span> : {pData.tec}
                  </p>
                </div>
                <a
                  href
                  className="btn-list"
                  onClick={() => {
                    location.state === null
                      ? navigate(-1)
                      : navigate("/project");
                  }}
                >
                  VIEW LIST
                </a>
              </div>
              <div className="body">
                <p>
                  <img
                    src={pData.image}
                    style={{ width: "1463.14px" }}
                    alt=""
                  />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    </>
  );
};

export default ProjectDetail;
