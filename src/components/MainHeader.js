import React, { useContext, useEffect, useRef, useState } from "react";

import MainSideBar from "./MainSideBar";
import { CommonDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainHeader = ({ headerFix }) => {
  const navigate = useNavigate();
  const { setSubMenuCheck } = useContext(CommonDispatchContext);
  const [menuCheck, setMenuCheck] = useState(false);

  return (
    <>
      <div
        id="header"
        className={headerFix ? "headerFix" : ""}
        onMouseLeave={() => setMenuCheck(false)}
      >
        <div className="sitelogo">
          <a
            href
            onClick={() => navigate("/")}
            className="off"
            style={headerFix ? { display: "none" } : {}}
          >
            <img
              src={"/images/common/logo.png"}
              alt="(주)별생각"
              style={{ width: "81px", height: "50px" }}
            />
          </a>
          <a
            href
            onClick={() => navigate("/")}
            className="on"
            style={headerFix ? { display: "block" } : {}}
          >
            <img
              src={"/images/common/logo_on.png"}
              alt="(주)별생각"
              style={{ width: "81px", height: "50px" }}
            />
          </a>
        </div>
        <div className="contain">
          <div id="gnb" className="gnb">
            <h2 className="hide">주메뉴</h2>
            <ul onMouseEnter={() => setMenuCheck(true)}>
              <li className={`m1 ${headerFix ? "fontColorBlack" : ""}`}>
                <a href onClick={() => navigate("/company/introduce")}>
                  회사소개
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={() => navigate("/company/introduce")}>
                        회사 개요
                      </a>
                    </li>
                    <li>
                      <a href onClick={() => navigate("/company/history")}>
                        회사 연혁
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`m2 ${headerFix ? "fontColorBlack" : ""}`}>
                <a href onClick={(e) => navigate("/business/sub1")}>
                  사업분야
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={(e) => navigate("/business/sub1")}>
                        내진 준불연 단열일체형 패널
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => navigate("/business/sub2")}>
                        SATIS(화장실 칸막이)
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => navigate("/business/sub3")}>
                        SATIS 항균 불연패널
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => navigate("/business/sub4")}>
                        PF단열재
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => navigate("/business/sub5")}>
                        동화자연마루 스쿨
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => navigate("/business/sub6")}>
                        동화자연마루 에코스택
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`m3 ${headerFix ? "fontColorBlack" : ""}`}>
                <a href onClick={(e) => navigate("/project")}>
                  Projects
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={() => navigate("/project/0")}>
                        관공서
                      </a>
                    </li>
                    <li>
                      <a href onClick={() => navigate("/project/1")}>
                        교육기관
                      </a>
                    </li>
                    <li>
                      <a href onClick={() => navigate("/project/2")}>
                        민간시설
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`m4 ${headerFix ? "fontColorBlack" : ""}`}>
                <a href onClick={(e) => navigate("/contact")}>
                  Contact Us
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={(e) => navigate("/contact")}>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a
          href
          className="btn-m-menu"
          style={headerFix ? { borderLeftColor: "#ddd" } : {}}
          onClick={() => {
            document.body.style.overflow = "hidden";
            setSubMenuCheck(false);
          }}
        >
          <span className={headerFix ? "backgroudBlack" : ""}>menu</span>
        </a>
        <div
          onMouseEnter={() => setMenuCheck(true)}
          className={`submenu-bg ${menuCheck ? "menu-active-back" : ""}`}
        ></div>
      </div>
      <MainSideBar />
      <hr />
    </>
  );
};

MainHeader.defaultProps = {
  headerFix: false,
};

export default MainHeader;
