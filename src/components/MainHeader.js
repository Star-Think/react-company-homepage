import React, { useState } from "react";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainHeader = ({ setSubMenuCheck }) => {
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
                <a href="/sub/sub01_01.php">회사소개</a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href="/sub/sub01_01.php">회사 개요</a>
                    </li>
                    <li>
                      <a href="/sub/sub01_02.php">회사 연혁</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m2">
                <a href="/sub/sub02_01.php">사업분야</a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href="/sub/sub02_01.php">
                        내진 준불연 단열일체형 패널
                      </a>
                    </li>
                    <li>
                      <a href="/sub/sub02_02.php">SATIS(화장실 칸막이)</a>
                    </li>
                    <li>
                      <a href="/sub/sub02_03.php">SATIS 항균 불연패널</a>
                    </li>
                    <li>
                      <a href="/sub/sub02_04.php">PF단열재</a>
                    </li>
                    <li>
                      <a href="/sub/sub02_05.php">동화자연마루 스쿨</a>
                    </li>
                    <li>
                      <a href="/sub/sub02_06.php">동화자연마루 에코스택</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m3">
                <a href="/sub/sub03_01.php?cat_no=1">Projects</a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href="/sub/sub03_01.php?cat_no=1">관공서</a>
                    </li>
                    <li>
                      <a href="/sub/sub03_01.php?cat_no=2">교육기관</a>
                    </li>
                    <li>
                      <a href="/sub/sub03_01.php?cat_no=3">민간시설</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m4">
                <a href="/sub/sub04_01.php">Contact Us</a>
                <div className={`submenu ${menuCheck ? "menu-active" : ""}`}>
                  <ul>
                    <li>
                      <a href="/sub/sub04_01.php">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a href="#menu" className="btn-m-menu" onClick={setSubMenuCheck(false)}>
          <span>menu</span>
        </a>
        <div
          onMouseEnter={() => setMenuCheck(true)}
          className={`submenu-bg ${menuCheck ? "menu-active-back" : ""}`}
        ></div>
      </div>
      <div id="menu" className="mobile-navigation">
        <nav className="nav-menu">
          <ul>
            <li className="m1 ">
              <a href="#">회사소개</a>
              <div className="submenu">
                <ul>
                  <li className="active">
                    <a href="/sub/sub01_01.php">회사 개요</a>
                  </li>
                  <li>
                    <a href="/sub/sub01_02.php">회사 연혁</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="m2">
              <a href="#">사업분야</a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="/sub/sub02_01.php">내진 준불연 단열일체형 패널</a>
                  </li>
                  <li>
                    <a href="/sub/sub02_02.php">SATIS(화장실 칸막이)</a>
                  </li>
                  <li>
                    <a href="/sub/sub02_03.php">SATIS 항균 불연패널</a>
                  </li>
                  <li>
                    <a href="/sub/sub02_04.php">PF단열재</a>
                  </li>
                  <li>
                    <a href="/sub/sub02_05.php">동화자연마루 스쿨</a>
                  </li>
                  <li>
                    <a href="/sub/sub02_06.php">동화자연마루 에코스택</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="m3">
              <a href="#">Projects</a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="/sub/sub03_01.php?cat_no=1">관공서</a>
                  </li>
                  <li>
                    <a href="/sub/sub03_01.php?cat_no=2">교육기관</a>
                  </li>
                  <li>
                    <a href="/sub/sub03_01.php?cat_no=3">민간시설</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="m4">
              <a href="#">Contact Us</a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="/sub/sub04_01.php">Contact Us</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <a href="javascript:void(0);" className="menu-close">
          Close
        </a>
      </div>
      <div className="mobile-overlay"></div>
      <hr />
      <div id="container">
        <div className="main-visual">
          <h2 className="hide">메인슬라이드이미지</h2>
          <ul id="mainSlide" className="mainSlide">
            <li className="item">
              <div className="vis-bg bg1"></div>
              <div className="vis-tt cnt1">
                <div className="ib">
                  <div className="anifade1">
                    <p className="t1 ff-ns">건축 외·내부의 혁신</p>
                    <p className="t2 ff-nf">
                      <img src="/images/main/logo_vis.png" alt="INEX" />
                    </p>
                    <p className="t3 ff-ns">
                      건물의 에너지 소비를 절감시키는 Green Technology 개발로{" "}
                      <br />
                      자연과 자원을 보호하는 기술
                    </p>
                  </div>
                  <div className="box anifade2"></div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="vis-bg bg2"></div>
              <div className="vis-tt cnt2">
                <div className="over-h">
                  <p className="t1 ff-tt anileft">
                    Material for <strong>Structure</strong>,
                  </p>
                  <p className="t2 ff-tt anifade2">
                    Structure for <strong>People</strong>
                  </p>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="vis-bg bg3"></div>
              <div className="vis-tt cnt3">
                <div className="over-h">
                  <p className="t1 ff-ns anileft">사람을 위한 건물,</p>
                  <p className="t2 ff-ns anifade2">건물을 위한 자재</p>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="vis-bg bg4"></div>
              <div className="vis-tt cnt4">
                <div className="anifade1">
                  <p className="t1 ff-ns">고객과 기업, 환경을 생각하며</p>
                  <p className="t1 ff-ns">
                    <strong>고품질의, 안전한 친환경 제품을 만듭니다!</strong>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <hr />

        <div id="footer">
          <h2 className="hide">하단영역</h2>
          <div className="contain">
            <div className="foot-logo ff-nf">(주) 이넥스월</div>
            <div className="foot-info">
              <address>
                <span>서울특별시 서초구 방배천로 26길 22 이넥스빌 </span>
                <span>TEL : 02-785-7522</span>
                <span>FAX : 02-785-7523</span>
                <div className="copy">
                  Copyright &copy; 2021 by (주) 이넥스월. All rights reserved.
                </div>
                <span style={{ opacity: 0 }}>
                  <a
                    href="http://www.website.co.kr"
                    target="_blank"
                    style={{ opacity: 0 }}
                  >
                    홈페이지제작
                  </a>
                  <a
                    href="https://blog.naver.com/websitecokr"
                    target="_blank"
                    style={{ opacity: 0 }}
                  >
                    website.co.kr
                  </a>
                </span>
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
