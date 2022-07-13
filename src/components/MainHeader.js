import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper";
// import "swiper/swiper.scss";
// import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

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

  const swiperOpacity1_1 = useRef();
  const swiperOpacity1_2 = useRef();
  const swiperOpacity2_1 = useRef();
  const swiperOpacity2_2 = useRef();
  const swiperOpacity3_1 = useRef();
  const swiperOpacity3_2 = useRef();
  const swiperOpacity4_1 = useRef();
  const swiperOpacityReset = () => {
    swiperOpacity1_1.current.style = "";
    swiperOpacity1_2.current.style = "";
    swiperOpacity2_1.current.style = "";
    swiperOpacity2_2.current.style = "";
    swiperOpacity3_1.current.style = "";
    swiperOpacity3_2.current.style = "";
    swiperOpacity4_1.current.style = "";
  };

  useEffect(() => {
    swiperOpacity1_1.current.style = "opacity : 1;";
    swiperOpacity1_2.current.style = "opacity : 1;";
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
        <a
          className="menu-close"
          onClick={() => {
            document.body.style.overflow = "";
            setSubMenuCheck(true);
          }}
        >
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
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              centeredSlides={true}
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              modules={[Autoplay, EffectFade, Navigation]}
              className="mySwiper"
              onSlideChange={(swiperCore) => {
                const { activeIndex, snapIndex, previousIndex, realIndex } =
                  swiperCore;
                console.log({
                  activeIndex,
                  snapIndex,
                  previousIndex,
                  realIndex,
                });

                if (activeIndex === 0) {
                  swiperOpacityReset();
                  swiperOpacity1_1.current.style = "opacity : 1;";
                  swiperOpacity1_2.current.style = "opacity : 1;";
                } else if (activeIndex === 1) {
                  swiperOpacityReset();
                  swiperOpacity2_1.current.style =
                    "margin-left: -9em; transform: translateX(0);";
                  swiperOpacity2_2.current.style = "opacity : 1;";
                } else if (activeIndex === 2) {
                  swiperOpacityReset();
                  swiperOpacity3_1.current.style =
                    "margin-left: -9em; transform: translateX(0);";
                  swiperOpacity3_2.current.style = "opacity : 1;";
                } else if (activeIndex === 3) {
                  swiperOpacityReset();
                  swiperOpacity4_1.current.style = "opacity : 1;";
                }
              }}
            >
              <SwiperSlide>
                <li className="item" data-swiper-parallax="-300">
                  ssss
                  <div className="vis-bg bg1"></div>
                  <div className="vis-tt cnt1">
                    <div className="ib">
                      <div
                        className="anifade1 parallax-bg"
                        slot="container-start"
                        data-swiper-parallax="-23%"
                        ref={swiperOpacity1_1}
                      >
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
                      <div
                        ref={swiperOpacity1_2}
                        className="box anifade2"
                      ></div>
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
                      <p className="t1 ff-tt anileft" ref={swiperOpacity2_1}>
                        Material for <strong>Structure</strong>,
                      </p>
                      <p className="t2 ff-tt anifade2" ref={swiperOpacity2_2}>
                        &nbsp;Structure for <strong>People</strong>
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
                      <p className="t1 ff-ns anileft" ref={swiperOpacity3_1}>
                        사람을 위한 건물,
                      </p>
                      <p className="t2 ff-ns anifade2" ref={swiperOpacity3_2}>
                        건물을 위한 자재
                      </p>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="item">
                  <div className="vis-bg bg4"></div>
                  <div className="vis-tt cnt4">
                    <div className="anifade1" ref={swiperOpacity4_1}>
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
        <div id="main-content">
          <div className="cont-wrap">
            <div className="main-business cont">
              <Tabs>
                <div className="head">
                  <h2 className="main-tit ff-tt">
                    <span>Our Business</span>
                  </h2>
                  <div className="bsnsTab">
                    <div className="swiper-container">
                      <ul className="swiper-wrapper">
                        <TabList>
                          <Tab>
                            <li className="swiper-slide">
                              <a href onClick={(e) => e.preventDefault}>
                                <div className="ico ico1"></div>
                                <span className="tit">Uni-Wall</span>
                              </a>
                            </li>
                          </Tab>
                          <Tab>
                            <li className="swiper-slide">
                              <a href onClick={(e) => e.preventDefault}>
                                <div className="ico ico2"></div>
                                <span className="tit">SATIS</span>
                              </a>
                            </li>
                          </Tab>
                          <Tab>
                            <li className="swiper-slide">
                              <a href onClick={(e) => e.preventDefault}>
                                <div className="ico ico3"></div>
                                <span className="tit">SATIS 항균 불연패널</span>
                              </a>
                            </li>
                          </Tab>
                          <Tab>
                            <li className="swiper-slide">
                              <a href onClick={(e) => e.preventDefault}>
                                <div className="ico ico4"></div>
                                <span className="tit">PF 단열재</span>
                              </a>
                            </li>
                          </Tab>
                          <Tab>
                            <li className="swiper-slide">
                              <a href onClick={(e) => e.preventDefault}>
                                <div className="ico ico5"></div>
                                <span className="tit">동화자연마루 스쿨</span>
                              </a>
                            </li>
                          </Tab>
                          <Tab>
                            <li className="swiper-slide">
                              <a href onClick={(e) => e.preventDefault}>
                                <div className="ico ico6"></div>
                                <span className="tit">
                                  동화자연마루 에코스텍
                                </span>
                              </a>
                            </li>
                          </Tab>
                        </TabList>
                      </ul>
                    </div>
                  </div>
                </div>
                <TabPanel>
                  <div id="bsns1" className="bsnsCont">
                    <div className="imgbox">
                      <div className="thumb">
                        <img src="/images/main/bsns1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="txtbox">
                      <div className="tit">
                        Uni-Wall(내진줄불연 단열 일체형 패널)
                      </div>
                      <div className="txt">
                        단열재와 외장재가 일체화된 패널형 제품으로, 외단열
                        공법으로 단열 공간을 절약하여 실내공간 확보에 유리하고,
                        공사기간을 단축 시킬 수 있습니다.
                      </div>
                      <a href="/sub/sub02_01.php" className="btn-more">
                        View More
                      </a>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div id="bsns2" className="bsnsCont">
                    <div className="imgbox">
                      <div className="thumb">
                        <img src="/images/main/bsns2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="txtbox">
                      <div className="tit">SATIS (화장실칸막이)</div>
                      <div className="txt">
                        INEXWALL의 기술과 경험을 기반으로 High Quality 화장실
                        칸막이 시장을 선도하며, 지난 10여년간 학교 및 공공
                        화장실 문화를 개선해 왔습니다.
                      </div>
                      <a href="/sub/sub02_02.php" className="btn-more">
                        View More
                      </a>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div id="bsns3" className="bsnsCont">
                    <div className="imgbox">
                      <div className="thumb">
                        <img src="/images/main/bsns3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="txtbox">
                      <div className="tit">SATIS 항균 불연패널(불연벽장재)</div>
                      <div className="txt">
                        주변과 조화를 이루면서 세련된 분위기를 완성하는 인테리어
                        시스템 입니다. <br />
                        석고보드의 장점과 퍼스탑의 아름다움을 결합하여 빠른
                        시공성을 보장합니다.{" "}
                      </div>
                      <a href="/sub/sub02_03.php" className="btn-more">
                        View More
                      </a>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div id="bsns4" className="bsnsCont">
                    <div className="imgbox">
                      <div className="thumb">
                        <img src="/images/main/bsns4.jpg" alt="" />
                      </div>
                    </div>
                    <div className="txtbox">
                      <div className="tit">PF 단열재</div>
                      <div className="txt">
                        내열성과 내구성이 우수한 열경화서 수지를 90%이상의
                        독립기포율로(Closed Cell) 발포시킨 고성능 건축용 단열재.
                      </div>
                      <a href="/sub/sub02_04.php" className="btn-more">
                        View More
                      </a>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div id="bsns5" className="bsnsCont">
                    <div className="imgbox">
                      <div className="thumb">
                        <img src="/images/main/bsns5.jpg" alt="" />
                      </div>
                    </div>
                    <div className="txtbox">
                      <div className="tit">
                        동화자연마루 스쿨 (친환경 기능성 학교용 마루)
                      </div>
                      <div className="txt">
                        뛰어난 품질과 가격, 환경친화성으로 전국 학교에서 가장
                        인기를 끌고 있는 중보행용 마루입니다.
                      </div>
                      <a href="/sub/sub02_05.php" className="btn-more">
                        View More
                      </a>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div id="bsns6" className="bsnsCont">
                    <div className="imgbox">
                      <div className="thumb">
                        <img src="/images/main/bsns6.jpg" alt="" />
                      </div>
                    </div>
                    <div className="txtbox">
                      <div className="tit">동화자연마루 에코스텍</div>
                      <div className="txt">
                        공간의 용도에 맞는 최상의 흡음기능과 함께 고급 인테리어
                        마감효과를 동시에 연출할 수 있는 고품격 인테리어
                        흡음판넬입니다.
                      </div>
                      <a href="/sub/sub02_06.php" className="btn-more">
                        View More
                      </a>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            <div className="main-project cont">
              <div className="head">
                <button
                  ref={prevRef}
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                >
                  Previous
                </button>
                <h2 className="main-tit ff-tt">
                  <span>Projects</span>
                </h2>
                <a href="/sub/sub03_01.php" className="btn-more">
                  View More
                </a>
                <button
                  ref={nextRef}
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                >
                  Next
                </button>
              </div>
              <div className="slide-zone">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  className="mySwiper"
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: true }}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  <ul className="items">
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=130">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/130/large_a85a3d0e7438466cd34de01097af2c5d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">새마을금고 IT센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=16">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/16/large_a78fcb1d42a3d8af132af0397e022c0b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울신상계초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=2">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/2/large_b67856cfc36188c4cfe913b7dd53e2e80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">세종특별자치시의회 청사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=131">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/131/large_a6d0319beb5e6595acd735016f1756bd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한국전력공사 강동송파지사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=17">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/17/large_9af372073bc6d3137a643bfe169591ba0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            서울금천초등학교 급식실 및 학생식당
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=3">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/3/large_4cecbad96045773c77a0401d186ac16e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울남부지방법원 별관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=132">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/132/large_aebcb6e3e94b4585ed16ff5e31e157a50.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한국전력공사 동해전력지사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=18">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/18/large_4c65757f1aaf001e80bd594f7506f13f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포 청수초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=4">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/4/large_759b51a176d12bf18b58e22a1070f8ba0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">중앙선거관리위원회 별관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=133">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/133/large_bd15e93deeaec3e6a7bcfefcec30d40b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">KT 대관령 수련관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=19">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/19/large_f1d8bb9f1959bd05cf115884cc72abcd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">군포 산본초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=5">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/5/large_def0f1335eed3ead6fc5e0bc42d342ea0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">수도권기상청 별관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=134">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/134/large_cbdd84b0a579736e8399d722e15a5fd20.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">춘천 수산물 종합유통센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=20">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/20/large_a9f7a19841d2b3c49592ec0ffb4f69400.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부천역곡초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=6">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/6/large_46d15190dbb5138f7e0825845658632a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">관세평가분류원 청사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=135">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/135/large_c45f186b4d38223d2d0feb180a9d394b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">홀트 일산복지타운</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=21">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/21/large_140784c60daf00bc2656bbb9886969110.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부천중앙초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=7">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/7/large_9e0495fddbdb39385f08cd3b7984d8b90.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">세종시 보건환경연구원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=136">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/136/large_6a15f6c08b38a1bb24bf133e620c73f10.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평창 영월정선 축협</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=22">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/22/large_bd7431cf31f2d264146c1b0460ebbc6c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성남 운중초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=8">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/8/large_136aa3092b19c7df7b26272227148b6c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">인천광역시 중구 제2청</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=137">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/137/large_314e8a5d8716117a87434a05a0f6be200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">충청북도학생외국어교육원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=23">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/23/large_bea0540684b7fe772ea6f2d1d976df530.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평택성동초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=9">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/9/large_138039e1eb979eeb6a4cafda2fd14c440.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">대구광역시 서구 본청사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=138">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/138/large_624185e9fecf2f2ad6d1b180b4b009480.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">원주 H타워 지식산업센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=47">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/47/large_bf818148fe0dc7100219ad281be834d10.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평택중앙초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=10">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/10/large_1ef110e0edebce43a06cbdcddcc49a100.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한국환경산업기술원 별관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=139">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/139/large_7f49daeea20165cb3b9ddc21ae1637480.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광동 케미칼</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=48">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/48/large_908f1c40b6e51cbd8fd5741665e1862a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            성남 내정초등학교 다목적체육관
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=11">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/11/large_b25437239e31d27002f6ad8b6cc8de7e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">공주세무서 청사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=140">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/140/large_b5c8e4900dbe07545c65df1fbdbd77b60.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">인천 원창동 재원산업</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=49">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/49/large_38490c0efb3d2ddb3e1d6da4c63377e60.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            성남 하탑초등학교 다목적체육관
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=12">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/12/large_8afef3a02397f39822e146aa6c553d300.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">철원군 갈말읍사무소 신청사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=141">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/141/large_f71a0b809cf7626f6401bca69172c3630.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">역삼동 벽암빌딩</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=50">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/50/large_071645a287dbb39ea6f2999b27488fa40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포 고창초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=13">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/13/large_fc649b913d32d99fe4bdd89d30774ddd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">용인시 기흥구청 별관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=51">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/51/large_ccba1df1852bbb009dccb8fd2381f7c80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안산 관산초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=14">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/14/large_6daaa12a4785783d0fb56d4c36339e9d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">진천군 이월면청사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=52">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/52/large_9dcb197d1d09074bc2dae138b5809a540.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">고양 일산초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=24">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/24/large_b42f73eb58a7b7d08f31e9e7bb62a3c00.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">흥선동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=53">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/53/large_8b25c81e114362c0a7a363b0113afa1e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포 풍무초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=25">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/25/large_b9412763d5db0a3a9571de64f55c5d760.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">연안동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=54">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/54/large_909b5e4b0263c7a3d29b54a504306ff10.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안양동초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=27">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/27/large_ae597caf17839c565c4a88acb88e6d760.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">위례동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=55">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/55/large_b3fd8ac3abaa68c6bb36212fbc20bc6f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안산화정초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=28">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/28/large_c722fdda8b988000383ee781450458fb0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">동탄8동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=56">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/56/large_dc1b2cb9c24eef0cec2ffd12ae5c83be0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">수원 영덕초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=29">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/29/large_d8378ac40c89d85f747390caba540f810.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">석수3동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=57">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/57/large_a55bb344981055ee172f872a909c840e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">하남 위례초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=30">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/30/large_6e61f8ff0fc3fcf9dd05a89b20a644460.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">도화2,3동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=58">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/58/large_b9991a2e1ca8d68da9360007a178ede40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">용인 모현초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=31">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/31/large_1626e87683736b88287e7496afb3ccd20.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">석사동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=59">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/59/large_4a9c413a88f04a991711951b15360b5a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">의정부 의순초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=32">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/32/large_2ff53e92defc409ee71faebf6dc947800.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">화도수동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=60">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/60/large_a97c4ea9c8c34ee619a8d81fb55454330.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">파주 새금초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=33">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/33/large_29b9d15630fc8fda3b46d637e93235a50.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">이포권역 행복센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=61">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/61/large_13e13d8ff320ff1828001dc6332b77c00.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양평초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=34">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/34/large_aefa4db4dc6ccbc7666991af2022f52c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">여흥동 주민센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=62">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/62/large_0fc66853c554346ecb255875c44073e90.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">춘천교육대학교 부설초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=35">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/35/large_fa7790d5ca8b6c727b941758d0db216a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">상계9동 주민센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=63">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/63/large_d1d64c704606507f22e347a2ff66cff40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">원주초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=36">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/36/large_97010010cb961217d42d64767f5e751a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">가능동 주민센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=64">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/64/large_c9eb719fc15d3335b910fd11ad8ca7de0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">홍천 남산초등학교 서천분교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=37">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/37/large_1cbb47a93af576b3b4a27338318ff3de0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">장기동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=65">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/65/large_2f5394c1258f37ee6fe20605d83456ab0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">원주 중앙초등학교 교사동</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=38">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/38/large_d2b0a150bd1c0d1b5f4cdd5ff913ca790.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">염전골 마을센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=66">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/66/large_102e638b8c5d18a8f714dc80cd6e0c450.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">영동 양강초등학교 특별교실</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=39">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/39/large_3c5a31ee2a12c6da50e5e263915289ff0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부천동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=67">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/67/large_212fbdf0829a7f82328c6d9b2ca6727a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광주 새별초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=40">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/40/large_dd8dea9ac923f086293a6f274b657bfd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">단대동 주민센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=68">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/68/large_f1c59d61b18b7b93599e4e5cf694bdce0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광주 효천초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=41">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/41/large_2ffd83638cccf0b5d5bb130e1f56bb360.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">철산1동 주민센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=69">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/69/large_175d609f3415376b24e815504c3b8c4a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">전주교대군산부설초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=42">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/42/large_668291d883035dc967b032a6e13291200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">송림6동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=70">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/70/large_68a999f6b39e706a1d30de785904de700.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">남원 인월초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=43">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/43/large_b7acac70bf498ee56b4790b335b9d6c70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양지면 주민자치센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=71">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/71/large_6dc87a0e5f4864dca80caf270c31bf3f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">남원 대산초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=44">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/44/large_acdbece440ef784c715f1d109ab3300e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">정왕2동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=72">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/72/large_2faa0c9d59014b558c1d30c4ac9066090.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">이리 중앙초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=45">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/45/large_2db4c146979130e7c39cda010f0a05840.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">대야동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=73">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/73/large_dde7280fff911b4f582abb95f7b4112b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">경산 압량초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=46">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/46/large_bdd789d0e5d114ba6ca99aaf3278b85c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">초평동 행정복지센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=105">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/105/large_f4160534f4f434092645fad893fbbbcf0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">화성시 도시안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=74">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/74/large_9b84213c063a1aeb0a1fe64207ef66a40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">청도 화양초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=106">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/106/large_712aead28dd1deec453485946a7d160f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">국방신뢰성연구센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=75">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/75/large_74a6666dd994c8002b82cf87a1eb9e840.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">거제 오비초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=107">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/107/large_a94a8c0c6af707bea685fa970731b5190.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">구로구 가족통합지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=76">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/76/large_959fb6a12aad67c8f62a7d87305a414d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">거제 진목초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=108">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/108/large_371f1bc6faf3576b0771966996b503540.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광명시 청년창업지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=77">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/77/large_3e1247c8de7f7f1ccb202db06f78a8420.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            창원 합성초등학교 다목적강당
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=109">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/109/large_09ed79db555672fa4421e2166616ecd40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">동작구 청년창업지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=78">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/78/large_79dab69ff7ea5fdf14a9775def7f2d950.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 정신여자중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=110">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/110/large_517bc2f47aa24c4236a9b82149295b740.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">행궁동 어울림센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=79">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/79/large_a24b3a6298e2722a95cbbe049cbd6fff0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit"> 서울 광진중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=111">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/111/large_29cb1a786b756777b395dd4232a50b860.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">삼척항 수산물유통물류센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=80">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/80/large_01b6ce7bb9c2f8c7f54fbda85a90bdd20.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 구룡중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=112">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/112/large_cc77cead52dfe14b611b9a06a59111650.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김해시 메디컬실용화센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=81">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/81/large_31f2f95d9118264bcbf503deb402122e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 월계중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=113">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/113/large_186e51f1c6f13cd72bdafb3949b39bf80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">시흥시 차량등록사업소</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=82">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/82/large_0c8b5f530ff51009e59a5faa82a095360.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 안천중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=114">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/114/large_9237305bedd132c7ae4464d03501e0950.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안동시 육아종합지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=83">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/83/large_1b312707a89d072715074e85cf9ef2520.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 방화중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=115">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/115/large_7181908df0a4a162e3c28fb34e9218110.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">포천시 CCTV 스마트안심센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=85">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/85/large_46ec3945d9ba13359876f43b42804afd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">북서울중학교 창호개선</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=116">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/116/large_01e28f7f789fb5f69d5242d81ebeed2a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            반도체 융합부품 실장기술 지원센터
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=86">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/86/large_b8d7d8eb92a038348f56ed5fb7213be10.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성남 영성중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=117">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/117/large_8fb38dfb7da2d203d2484d2250f60c860.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            사당4동 도시재생현장지원센터
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=88">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/88/large_cff4c599614b34980268c7b12e63373c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">남양주 광동중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=118">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/118/large_cf1402f7acf5a54f8fa2d1ed70fdc1800.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            한탄강국가지질공원 방문자센터
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=89">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/89/large_57c6391c21c5e2a508a8b17f80add48d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성남 은행중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=119">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/119/large_f5e7be8c1c1fc84bfc7f4a6a4dd60cad0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한국산업인력공단 경남지사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=90">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/90/large_4a51c1f93278996c7b801a411796c6f50.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안양 대안중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=120">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/120/large_f97c5b74b714d5fa21eb6ee7ace8b4800.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평택시 농업기술센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=91">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/91/large_6fc7749dd58c9dcf7ff244092486fb8d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성남 창성중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=121">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/121/large_dc967885ac1e352106d15eb7c4e2c5cd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">시흥동 우체국</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=92">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/92/large_933f99b0efd60b2e763a8aa4c592ee270.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">군포 수리중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=122">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/122/large_bd5b41be6eb1a2f3308726f8ddbcced40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">돈암동 우체국</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=93">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/93/large_63eec028797bf7b33b15747e570a23930.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양평 개군중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=123">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/123/large_d08c931e2b9c815792904611880c5f7f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            한국자산관리공사 광주전남 지역본부
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=94">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/94/large_9f13710b3c4c0238343cb25a205c2e3f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포 하늘빛중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=124">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/124/large_c71abc02a91d805a663f629052259b2f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            국민건강보험공단 대전지역본부 사옥
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=95">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/95/large_07fc4f0e405ae82d019ff3bcba9b69290.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">용인 모현중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=125">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/125/large_67c03cae0742dac0ff1440afa50bf9190.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            한국수력원자력 화천수력발전소 사옥
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=96">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/96/large_a809a08b8685149eed3eb38984b76def0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">춘천 유봉여자중학교 체육관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=126">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/126/large_70c701858c20585bd9ddcf2ae9c227120.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">의정부지방 검찰청 제2신관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=97">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/97/large_4054566ccba416eb306ec087d38255c90.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">원주 상지여자중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=127">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/127/large_77acbda040e5795f2278311feaaad8890.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            전주 출입국관리소 군산 출장소
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=98">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/98/large_11e05ef02279b23b85485f542abccb780.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">세종 부강중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=128">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/128/large_53c7a5cce569377074e65a9ffc6c41230.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">춘천지방법원 횡성등기소</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=99">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/99/large_28c7897a2251434b2a462896f23350850.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">전북 장수중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=129">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/129/large_8c823dacda0e842c9a94460b4bc3a5040.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">포항준법지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=100">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/100/large_cc034a8d6711b1a72b6c25f7743968e70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">칠곡 장곡중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=143">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/143/large_1ed0390dd0ed35bbbfdf0e17ba5a8e9e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">밀양시 보훈회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=101">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/101/large_f18f97fbb1e61bc25ed1e8d36de86b4f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">청도 매전중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=146">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/146/large_7e84dd3ade83393e4a9984f72bd484280.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            인천광역시 미추홀구 보훈회관
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=102">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/102/large_5d0394e171fb06fe7c143d8c45d330950.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">경주 신라중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=174">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/174/large_2211be2a1b8094b6bf0735951a69faf30.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">포천시 보훈회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=103">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/103/large_c82e177a86ea34dab00c4345ce9090560.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">창녕 신창여자중학교 체육관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=175">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/175/large_c72b913cea7b0eb568a2e051cfdc09010.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">신월 보건지소</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=104">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/104/large_add2a1c8a5376aa9f54d188811e06c3a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부산진여자중학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=176">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/176/large_9bd6d24ece1f4d85226efbb71b3a43be0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">해운대구 보건소</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=142">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/142/large_b77ac6bb04d451155cd4ef9c244c168c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울삼각산고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=177">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/177/large_13f371724f226d5fd5316c1a98f15a4b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포시 보건소 별관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=144">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/144/large_2bebc205f82d6f7fa25edfa8fa7023b70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 원묵고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=178">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/178/large_f0109ca0fe873822b216790fcac1aaf00.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">철원군 보건소 치매안심센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=145">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/145/large_15aeead98ca8c58558a7df1d076e18ed0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 상암고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=179">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/179/large_7f45e7421a129c7b378be8ac35f059200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">효성평생건강센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=147">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/147/large_5cf297f290edc36d31abe32c32d2a3800.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 금천고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=180">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/180/large_24ea733e6557c0b8ba85bbd13385a14f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김해시 동부건강생활지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=148">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/148/large_30680cd14aa6e3ef89910c692bf8a65e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 문정고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=181">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/181/large_11757c012facc9b82dbe7779d286358d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">검단 노인복지관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=149">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/149/large_901d4cb70d5a7017e1fb1b28a14df4af0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 덕수고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=182">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/182/large_1c74802bcac51586e83d54637a6d0bea0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">홍천군 노인회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=150">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/150/large_2bbf115320a081f7c77462616a4f86d20.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 보인고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=183">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/183/large_f764dd1e3a42e67f2259ebd7214ed9340.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">의정부 흥선노인복지관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=151">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/151/large_7ebdd83d8b4608c04c779c68d6e9e7b50.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 신도림고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=184">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/184/large_470420db34f4fc99227f61b85d159c040.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">정관읍 복지회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=152">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/152/large_96901d4c067e521936ea1d401e3aa4040.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울도시과학기술고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=185">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/185/large_40a29ecc2c1fc8e536fa597fe3059cb00.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">가좌 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=154">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/154/large_fa024b12c8377040fc0f2094e90da6ad0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">파주 문산고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=186">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/186/large_11705c5dee0f9d6e753e1729813615a90.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">오류 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=155">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/155/large_70e226939a9527891ff515df8cf9573e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포제일고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=187">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/187/large_e0c61d1f3ad28dea6b6b373365a1163c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">대화 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=159">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/159/large_64545ed2ee0ecbd10688ec4419e8ecf30.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">수원농업생명과학고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=188">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/188/large_58373d8bdccd84a09e8e8f084cbee1000.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">풍동 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=160">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/160/large_6abb38f86a1faf43c4e0df3057db74a70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평택 한광여자고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=189">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/189/large_e1e83fe69370f2acc5c702ad3c44e7130.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">삼송 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=161">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/161/large_668ac13a55c1e24f9b27835b24eed2380.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평택 한광고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=190">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/190/large_ddd0ba8e8e42ad18bb84690af427d9bf0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">옥정 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=162">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/162/large_d186fb51f239b386f0cb14a89f259d4c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포 통진고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=191">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/191/large_6ef55f9aea7e7ab1983848c806d62cd30.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">태평 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=163">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/163/large_858a09a220c768c8cf60ae05836331150.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안산 경일관광경영고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=192">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/192/large_ea97c82520bf98733ffa3263a8338bd70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            한국소방산업기술원 소방장비정비센터 기숙사
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=165">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/165/large_d7943150d67c85c34ccbbccc5d3f3c840.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            강원대 사범대학부설고등학교 실습실
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=193">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/193/large_64bd764f89102de2743dd0bc22133d2a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">신창면 의용 소방대</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=166">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/166/large_a7ff706e4acaa3c991aad78c7144d0200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">제천산업고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=194">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/194/large_8142f590f9d22a6c906b62aebdda5a590.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">탕정 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=167">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/167/large_c8bd41dc3ad292c56e939f4dffc6041d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">충북체육고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=195">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/195/large_639d7ce969536935f2dc4e2e4859f0d80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">연수 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=168">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/168/large_af1e10f3d6c13e8627ab772e1da4b5680.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">진천 광혜원고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=196">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/196/large_3cdb64be6dabd4053f9bc30ab0d6696f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김천 소방서</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=169">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/169/large_1bcef8fd5095131683071a4dba54b5340.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">청주여자고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=197">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/197/large_bf312df9eb8770408142d849598f62740.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">율하 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=170">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/170/large_54776c352c23c98c7454956da6cf5d6c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김천생명과학고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=198">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/198/large_8c1249eb5de1aa34f90aeec291817b1f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안창 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=171">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/171/large_499918ace10e092bf6a33bb5084ad4420.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">경주 선덕여자고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=199">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/199/large_c59ff24a7cb45de09e66552256fd63b40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">마산소방서 소방정대</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=172">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/172/large_acf888c23b0e051b2e7038c10a1cee5b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">마산중앙고등학교 기숙사</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=200">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/200/large_448c0277ea0136b7c118d0c350a3f4f80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">청도 119안전센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=173">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/173/large_6e0aace3ee3ea158e4117714f8d67f5d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">창원성민여자고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=206">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/206/large_72aa4ef223a7d35e754696ca77da1ba90.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            서울대학교 실험동물자원관리동
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=201">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/201/large_e93d71caef819f72936ae109200e95b40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">강원 속초경찰서</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=208">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/208/large_15fdf04cb89e43be301ed78468f5efd70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울대학교 의과대학 분관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=202">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/202/large_b6331b73e8afb809419b3a5124f2d1230.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울동대문경찰서 용신지구대</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=209">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/209/large_d2f5344e9b58711ff834bf7b68adaedb0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울대학교 공학관 33동</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=203">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/203/large_0fbe818e418668ca65b3cd410d170bd90.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">금천 파출소</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=210">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/210/large_cb8926f415d6d4da2fc53d100d0fde6a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울대학교 공학관 30동</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=204">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/204/large_0cc956aef1841376bb2d815a2fb307de0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">충남서천경찰서 마서 파출소</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=211">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/211/large_d4495dd97165fd5584103333047875600.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            경인교대 안양 경기캠퍼스 예림생활관
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=205">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/205/large_124fc99b4e796ca41fc0f7f6687825ea0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">구로 오류지구대</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=232">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/232/large_9ba8d3bb4ac0be9f82c1e4cf21bd9bc40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">해운대 청소년수련관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=212">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/212/large_a0c5ce71b372736ded699e7e13a09dc70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">경인교대 학생회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=234">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/234/large_a0ca57d0b405ef5b7c62792edbaf8a510.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            청양 영등포구 모두휴 청소년야영장
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=213">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/213/large_9961450ad1c8f7213e8449490d0681b10.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            인천대학교 송도캠퍼스 생명공학부
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=236">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/236/large_34c8b3454b3d2287a243b8657057eec80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">일산서구 청소년수련관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=214">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/214/large_be7724ef049109e8cba7a26eb4a2a72b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            한국방송통신대학교 전북지역대학
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=300">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/300/large_651a182f2bd3d77cded992c71542d5ab0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광주학생해양수련원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=215">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/215/large_5c1725d1c6f1097c22bedebe2cb07dfe0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">전주교육대학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=301">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/301/large_de5b9e86d9e8efc63ba0c599ce8396600.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">거제학동학생야영수련원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=216">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/216/large_227adc2ebdcd3181816ee788b014b5470.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            진주 경상국립대학교 가좌캠퍼스
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=302">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/302/large_262b6c18d9da766a3fe1078c0eb18dae0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">경남문화예술회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=217">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/217/large_8cffa27edea8292044af61f57e2e4bde0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한경대학교 비봉관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=239">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/239/large_8e81dbf6bbdcab0c21abd261b75880520.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">동두천 시민회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=218">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/218/large_f43d152ffbb3c26c0cc1d6cf003791940.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한국방송통신대학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=241">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/241/large_64249192af99408c3d79b73f44a01e260.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            화성시 동탄 호수공원 어울림센터
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=219">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/219/large_e2f6f5c5ea5c7bfb76c12fe21892abcf0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한국폴리텍7대학 학생회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=243">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/243/large_cde826a3b19a5cecf95692de180374b00.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김포시 장릉 역사문화관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=220">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/220/large_8de4f4f780e33224287a620e1fd75f890.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">임학도서관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=245">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/245/large_0c789e43ec7a9aa8df00e6cd4789b3cc0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">철원 문화원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=221">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/221/large_d300b01199d77d0e038e22012d08eb120.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">용비도서관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=246">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/246/large_0fc316d05235be03b89383664bcdc4ca0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평택 농민회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=222">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/222/large_29375ead89b6c59275693256486d51450.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">안동시립중앙도서관 옥동분관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=247">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/247/large_937ee352d82a407e757d301a8d5c96f50.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">봉천 구립 싱글벙글 교육센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=223">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/223/large_aef1a9797d0fb5ce22a1febd168237d10.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">청도도서관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=248">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/248/large_690fcca03129daefe92c605bb21a572a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양구문예회관 정중앙 시네마</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=224">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/224/large_412fc47932bf591ca84c55e9c38d9e730.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">증평교육도서관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=251">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/251/large_8a38cf44f9e26cf1af8ab7a514833a770.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">횡성군 둔내 청소년 문화의집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=225">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/225/large_188197f2d764304f1c6e2ddfc29b25fc0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부산국립과학관 교육실</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=252">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/252/large_f4712177ff459ffd543808cf81775c9d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">철원군 화강문화센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=226">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/226/large_1905a12c17c896dc1717fb7acfe3001f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">통영진로교육지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=254">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/254/large_a51f6c781429bd64658d1585b804f5870.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양구백토 힐링체험센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=227">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/227/large_1872930957949296ea637817a9d025ad0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">속초양양교육지원청</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=303">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/303/large_afd641703aeb9f1d7b1cabafa81e975e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">평창읍 세대공감센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=228">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/228/large_a6bf3fd68e50838c6fa18e0562c53f040.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">정읍학생복지회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=256">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/256/large_1e3e82d6fd5d455b7eebc4897e74224b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">김해 한글박물관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=229">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/229/large_509d957315edd782c947371cc76cae400.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">제2 00원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=257">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/257/large_26d7bebae848857fbf969e793e57f87c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양촌문화교육지원센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=230">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/230/large_241e9e7a397833418da5d0800a2556fb0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울정진학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=260">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/260/large_faeb6f0597518bfb37e8e8e928614fbe0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">인문학이 익는마을</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=231">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/231/large_12b753a0fb15ada2c34cdf1b4f0fbe9c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">수원 공립세류유치원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=261">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/261/large_0451fb7dcfcfd87c137f232c19550b910.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">군포시 방짜유기 전수교육관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=233">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/233/large_0386b01ad17466d26cd84a9fc98ec0990.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">화성 솔빛유치원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=262">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/262/large_699db1bcf30a9c1e1eb8fa400a1d4bbd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">시흥 다어울림아동센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=235">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/235/large_3ac3e0bfa439a25d8af343c6beaf204a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광주 건국유치원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=304">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/304/large_d822fa0a9c04b22f3d10655a5cc61c240.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">호평동 해피누리복지관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=237">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/237/large_39641d705851011fd473f7978df089f20.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">남원 덕과초 유치원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=265">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/265/large_dab43c1347755c91ecafd2e006a4c0a90.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성동 상생도시센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=238">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/238/large_2d6873fb39cb58f84140d23bde65916f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">익산 부송초등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=267">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/267/large_3f7fbbc72d14d7f04ca10ba15d2cd4120.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광명장애인복지타운</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=240">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/240/large_3d14a337caff535f72415d197f9080c60.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부산 달산유치원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=268">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/268/large_6f9312ce7682d2ebfd32d5479599e7450.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성지 문화복합센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=242">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/242/large_620675e44c3ec7b0f87ebf8afe8d17da0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 내곡어린이집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=305">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/305/large_651f5fc9b7956d0c87ba56d79c86e6500.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">만안노인복지회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=244">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/244/large_17677fe50b354c710eae7d6962ad5ad50.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 도레미어린이집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=270">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/270/large_6b1f531188bdfdec64cc6a04c507204c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">수정 노인종합복지관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=249">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/249/large_550eb5d3929236adb531841ec692ab9d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 문래동 제2어린이집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=272">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/272/large_01011ba174087d33febd7fcd5cfa37510.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">상동 복지문화센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=253">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/253/large_76dac62d3fd86e728df0aa835cdf8ce60.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 은하어린이집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=273">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/273/large_8ae40b318640887cf34378981d0ac80e0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">합덕 남부문화스포츠센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=255">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/255/large_509d03797056b5eadcf7d1e0879890820.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부천 시청어린이집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=276">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/276/large_6d744ac803273d44859c192a12b32f710.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양주 서부권스포츠센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=258">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/258/large_234e28d2819a85bb53d9b9bb5d28607b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">분당 서현동 어린이집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=277">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/277/large_e793fce5035c2636dba71300c3eff1070.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">광주시 도척면 다목적체육관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=259">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/259/large_90a8275cfe6743efedbbb40abe29a09c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">양평 어린이건강놀이터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=278">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/278/large_504cbf59a8c7e605094298e298780d530.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성북 펜싱체육관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=263">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/263/large_1722cdcd406d4a0c09a70e165d6db46f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">거제 삼성어린이집</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=279">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/279/large_fe167dd64a2c8b96a6a8c76248e4cb1a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">창원대 체육관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=264">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/264/large_3111edcffa4235c1033aa311f579ec340.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 도곡중학교 승강기</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=280">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/280/large_50a330dc00c9645ac42b64097f46c6df0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            시흥국민체육센터 부속 어린이체육관
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=266">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/266/large_58627bb9941e04added7d2c8484327810.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">전주서신중학교 승강기</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=281">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/281/large_da9807a50ab06ee4e7292d1dde2b457d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">춘천교육대학교 체육관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=269">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/269/large_263212ae9c6ac3f7c7a96523fef85af60.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">포항 세명고등학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=282">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/282/large_2e248084246c551307f584578240b7b80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한경대 비봉관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=271">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/271/large_65be8543e0cb1aeea19c7e5a9399ff8a0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">고양 대곡초등학교 승강기</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=283">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/283/large_a02b8259418399ebc9caf9f8ab3ab8ed0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">용비도서관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=274">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/274/large_91aae9e89287b7549bd930e5b10b7b050.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            서울 도신초 병설유치원 승강기
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=284">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/284/large_28dc21b3aea0dfb689a78bf74e3c79250.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            목사랑시장 고객주차장&공유센터
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=285">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/285/large_61cc6b718b436fa51f4d451d434278020.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            한국산업기술시험원(KTL) 음향시험동
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=286">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/286/large_6b39f81c9974705cd510d6a8ef942e790.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">한국 폴리텍7대학 학생회관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=306">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/306/large_b31e4823419d4d8b25071b6a12f71b430.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            경상남도 남명학사(기숙사) 서울관
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=287">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/287/large_05bcb98d321c3fa0facaa32355c05b090.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            서울대학교 실험동물자원관리동
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=288">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/288/large_edda0a33d16bc4742f2983b5e80cb03c0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">증평 교육 도서관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=289">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/289/large_9f4f5cff5d182b9394ce3e1220da45720.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            경인교대 경기캠퍼스 예림생활관
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=290">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/290/large_2511fda8ad0a9e984e3e6c992de5e1a60.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울대학교 공학관 33동</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=291">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/291/large_ef1d1de9d2aab722cc6459f4ce76020b0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울대학교 의과대학 분관</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=292">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/292/large_ceebf4cf96d40fcb988fa8e3d081edbd0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            한국방송통신대학교 전북지역대학
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=293">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/293/large_6c33cf7cdc79323e1bdc680ebf68457f0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">전주 교육대학교</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=307">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/307/large_20f3f0ac77039ebf0185b1f54e52dd330.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">
                            인천대학교 송도캠퍼스 생명공학부
                          </div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=308">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/308/large_caa3bc119173f2d9857303efbb07a4d50.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">여주 교직원 사택</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=294">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/294/large_018009d351fe087334e5b0387ab677210.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">제2하나원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=295">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/295/large_d04eaa8394f2f8a2c769613d75e4d6490.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">부산 국립과학관 교육실</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=296">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/296/large_d416038f0ebb3cc85f3711f0c7e87e2d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">의정부시 버스공영차고지</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=309">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/309/large_a1f0b73bf9e4d2473680c1180d23f1740.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">인천항 크루즈터미널</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=310">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/310/large_9c2de296bec12a9f17f43ae444208e160.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 선정릉 공중화장실</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=297">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/297/large_f67c1192baf068858100161c875210010.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">성남 중앙공설시장</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=298">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/298/large_0cb316d08ee8da0656447d69e65e5c550.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">모란 민속5일장 공영주차장</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=311">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/311/large_4dab1d6288941ed847267c1cecf7d9f70.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">서울 시립은평의마을</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=312">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/312/large_3297d6c0cd3711697913ef3c5de553f80.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">담방 어린이공원</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=299">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/299/large_0b31617891bf159b2b32cc2e0e5ff0e40.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">구립 신원 어르신어울림센터</div>
                        </a>
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li>
                        <a href="/bbs/project-view.php?idx=313">
                          <div className="thumb">
                            <img
                              src="/uploaded/product/313/large_cb867113bb48b0908c9a9093a372a47d0.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tit">미단씨티 공원 화장실</div>
                        </a>
                      </li>
                    </SwiperSlide>
                  </ul>
                </Swiper>
              </div>
            </div>
          </div>
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
