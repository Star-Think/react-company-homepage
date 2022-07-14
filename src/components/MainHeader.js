import React, { useContext, useEffect, useRef, useState } from "react";

import MainSideBar from "./MainSideBar";
import { CommonDispatchContext } from "../App";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainHeader = () => {
  const { setSubMenuCheck } = useContext(CommonDispatchContext);
  const [menuCheck, setMenuCheck] = useState(false);

  return (
    <>
      <div id="header" onMouseLeave={() => setMenuCheck(false)}>
        <div className="sitelogo">
          <a href="/index.php" className="off">
            <img
              src={process.env.PUBLIC_URL + "images/common/logo.png"}
              alt="(주)이넥스월"
            />
          </a>
          <a href="/index.php" className="on">
            <img
              src={process.env.PUBLIC_URL + "images/common/logo_on.png"}
              alt="(주)이넥스월"
            />
          </a>
        </div>
        <div className="contain">
          <div id="gnb" className="gnb">
            <h2 className="hide">주메뉴</h2>
            <ul onMouseEnter={() => setMenuCheck(true)}>
              <li className="m1">
                <a href onClick={(e) => e.preventDefault}>
                  회사소개
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        회사 개요
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        회사 연혁
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m2">
                <a href onClick={(e) => e.preventDefault}>
                  사업분야
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        내진 준불연 단열일체형 패널
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        SATIS(화장실 칸막이)
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        SATIS 항균 불연패널
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        PF단열재
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        동화자연마루 스쿨
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        동화자연마루 에코스택
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m3">
                <a href onClick={(e) => e.preventDefault}>
                  Projects
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        관공서
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        교육기관
                      </a>
                    </li>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
                        민간시설
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m4">
                <a href onClick={(e) => e.preventDefault}>
                  Contact Us
                </a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href onClick={(e) => e.preventDefault}>
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
          onClick={() => {
            document.body.style.overflow = "hidden";
            setSubMenuCheck(false);
          }}
        >
          <span>menu</span>
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

export default MainHeader;
