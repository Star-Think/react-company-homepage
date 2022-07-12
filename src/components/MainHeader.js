import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
const sub_menu_list = [
  {
    id: "m1",
    textName: "회사소개",
    sub: [
      {
        subTextName: "회사 개요",
        herf: "",
      },
      {
        subTextName: "회사 연혁",
        herf: "",
      },
    ],
    active: "",
  },
  {
    id: "m2",
    textName: "사업분야",
    sub: [
      {
        subTextName: "내진 준불연 단열일체형 패널",
        herf: "",
      },
      {
        subTextName: "SATIS(화장실 칸막이)",
        herf: "",
      },
      {
        subTextName: "SATIS 항균 불연패널",
        herf: "",
      },
      {
        subTextName: "PF단열재",
        herf: "",
      },
      {
        subTextName: "동화자연마루 스쿨",
        herf: "",
      },
      {
        subTextName: "동화자연마루 에코스택",
        herf: "",
      },
    ],
    active: "",
  },
  {
    id: "m3",
    textName: "Projects",
    sub: [
      {
        subTextName: "관공서",
        herf: "",
      },
      {
        subTextName: "교육기관",
        herf: "",
      },
      {
        subTextName: "민간시설",
        herf: "",
      },
    ],
    active: "",
  },
  {
    id: "m4",
    textName: "Contact Us",
    sub: [
      {
        subTextName: "Contact Us",
        herf: "",
      },
    ],
    active: "",
  },
];
const MainHeader = ({ setSubMenuCheck }) => {
  const [menuCheck, setMenuCheck] = useState(false);

  const [subMenuId, setSubMenuId] = useState("");

  const subMenuClickHandle = (id) => {
    if (id !== subMenuId) {
      setSubMenuId(id);
    } else {
      setSubMenuId("");
    }
  };

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
        <a
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
      <div id="menu" className="mobile-navigation">
        <nav className="nav-menu">
          <ul>
            {sub_menu_list.map((data) => {
              return (
                <li
                  key={data.id}
                  className={`${data.id} arrow ${
                    subMenuId === data.id ? "active" : ""
                  }`}
                  onClick={() => subMenuClickHandle(data.id)}
                >
                  <a href="#">{data.textName}</a>
                  <div
                    className={`submenu ${
                      subMenuId === data.id ? "submenu_active" : ""
                    }`}
                  >
                    <ul>
                      {data.sub.map((sData, idx) => {
                        return (
                          <li key={idx}>
                            <a href={sData.herf}>{sData.subTextName}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        <a className="menu-close" onClick={() => setSubMenuCheck(true)}>
          Close
        </a>
      </div>
      <div className="mobile-overlay"></div>
      <hr />

      <div id="container">
        <div className="main-visual">
          <h2 className="hide">메인슬라이드이미지</h2>
          <ul id="mainSlide" className="mainSlide">
            <Swiper
              className="banner"
              style={{ height: "600px" }}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
            >
              <SwiperSlide>
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
                          건물의 에너지 소비를 절감시키는 Green Technology
                          개발로 <br />
                          자연과 자원을 보호하는 기술
                        </p>
                      </div>
                      <div className="box anifade2"></div>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
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
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="item">
                  <div className="vis-bg bg3"></div>
                  <div className="vis-tt cnt3">
                    <div className="over-h">
                      <p className="t1 ff-ns anileft">사람을 위한 건물,</p>
                      <p className="t2 ff-ns anifade2">건물을 위한 자재</p>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="item">
                  <div className="vis-bg bg4"></div>
                  <div className="vis-tt cnt4">
                    <div className="anifade1">
                      <p className="t1 ff-ns">고객과 기업, 환경을 생각하며</p>
                      <p className="t1 ff-ns">
                        <strong>
                          고품질의, 안전한 친환경 제품을 만듭니다!
                        </strong>
                      </p>
                    </div>
                  </div>
                </li>{" "}
              </SwiperSlide>
            </Swiper>
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
