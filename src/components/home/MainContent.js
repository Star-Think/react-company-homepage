import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Autoplay]);

const MainContent = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  return (
    <>
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
                              <span className="tit">SATIS ?????? ????????????</span>
                            </a>
                          </li>
                        </Tab>
                        <Tab>
                          <li className="swiper-slide">
                            <a href onClick={(e) => e.preventDefault}>
                              <div className="ico ico4"></div>
                              <span className="tit">PF ?????????</span>
                            </a>
                          </li>
                        </Tab>
                        <Tab>
                          <li className="swiper-slide">
                            <a href onClick={(e) => e.preventDefault}>
                              <div className="ico ico5"></div>
                              <span className="tit">?????????????????? ??????</span>
                            </a>
                          </li>
                        </Tab>
                        <Tab>
                          <li className="swiper-slide">
                            <a href onClick={(e) => e.preventDefault}>
                              <div className="ico ico6"></div>
                              <span className="tit">?????????????????? ????????????</span>
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
                      Uni-Wall(??????????????? ?????? ????????? ??????)
                    </div>
                    <div className="txt">
                      ???????????? ???????????? ???????????? ????????? ????????????, ?????????
                      ???????????? ?????? ????????? ???????????? ???????????? ????????? ????????????,
                      ??????????????? ?????? ?????? ??? ????????????.
                    </div>
                    <a
                      href
                      onClick={(e) => navigate("/business/sub1")}
                      className="btn-more"
                    >
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
                    <div className="tit">SATIS (??????????????????)</div>
                    <div className="txt">
                      ???????????? ????????? ????????? ???????????? High Quality ????????? ?????????
                      ????????? ????????????, ?????? 10????????? ?????? ??? ?????? ????????? ?????????
                      ????????? ????????????.
                    </div>
                    <a
                      href
                      onClick={(e) => navigate("/business/sub2")}
                      className="btn-more"
                    >
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
                    <div className="tit">SATIS ?????? ????????????(???????????????)</div>
                    <div className="txt">
                      ????????? ????????? ???????????? ????????? ???????????? ???????????? ????????????
                      ????????? ?????????. <br />
                      ??????????????? ????????? ???????????? ??????????????? ???????????? ??????
                      ???????????? ???????????????.{" "}
                    </div>
                    <a
                      href
                      onClick={(e) => navigate("/business/sub3")}
                      className="btn-more"
                    >
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
                    <div className="tit">PF ?????????</div>
                    <div className="txt">
                      ???????????? ???????????? ????????? ???????????? ????????? 90%?????????
                      ??????????????????(Closed Cell) ???????????? ????????? ????????? ?????????.
                    </div>
                    <a
                      href
                      onClick={(e) => navigate("/business/sub4")}
                      className="btn-more"
                    >
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
                      ?????????????????? ?????? (????????? ????????? ????????? ??????)
                    </div>
                    <div className="txt">
                      ????????? ????????? ??????, ????????????????????? ?????? ???????????? ??????
                      ????????? ?????? ?????? ???????????? ???????????????.
                    </div>
                    <a
                      href
                      onClick={(e) => navigate("/business/sub5")}
                      className="btn-more"
                    >
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
                    <div className="tit">?????????????????? ????????????</div>
                    <div className="txt">
                      ????????? ????????? ?????? ????????? ??????????????? ?????? ?????? ????????????
                      ??????????????? ????????? ????????? ??? ?????? ????????? ????????????
                      ?????????????????????.
                    </div>
                    <a
                      href
                      onClick={(e) => navigate("/business/sub6")}
                      className="btn-more"
                    >
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
              <a
                href
                onClick={(e) =>
                  navigate("/detail/130", { state: { main: "Y" } })
                }
                className="btn-more"
              >
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
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/130", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/130/large_a85a3d0e7438466cd34de01097af2c5d0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">??????????????? IT??????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/16", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/16/large_a78fcb1d42a3d8af132af0397e022c0b0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">???????????????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/2", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/2/large_b67856cfc36188c4cfe913b7dd53e2e80.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">??????????????????????????? ??????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/131", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/131/large_a6d0319beb5e6595acd735016f1756bd0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????????????????? ??????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/17", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/17/large_9af372073bc6d3137a643bfe169591ba0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">
                          ???????????????????????? ????????? ??? ????????????
                        </div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/3", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/3/large_4cecbad96045773c77a0401d186ac16e0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">???????????????????????? ??????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/132", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/132/large_aebcb6e3e94b4585ed16ff5e31e157a50.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????????????????? ??????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/130", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/18/large_4c65757f1aaf001e80bd594f7506f13f0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????? ??????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/130", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/4/large_759b51a176d12bf18b58e22a1070f8ba0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">??????????????????????????? ??????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/133", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/133/large_bd15e93deeaec3e6a7bcfefcec30d40b0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">KT ????????? ?????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/19", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/19/large_f1d8bb9f1959bd05cf115884cc72abcd0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????? ??????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/5", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/5/large_def0f1335eed3ead6fc5e0bc42d342ea0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????????????????? ??????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/134", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/134/large_cbdd84b0a579736e8399d722e15a5fd20.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????? ????????? ??????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/20", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/20/large_a9f7a19841d2b3c49592ec0ffb4f69400.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">????????????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/6", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/6/large_46d15190dbb5138f7e0825845658632a0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">????????????????????? ??????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/135", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/135/large_c45f186b4d38223d2d0feb180a9d394b0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????? ??????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/21", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/21/large_140784c60daf00bc2656bbb9886969110.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">????????????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/7", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/7/large_9e0495fddbdb39385f08cd3b7984d8b90.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">????????? ?????????????????????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/136", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/136/large_6a15f6c08b38a1bb24bf133e620c73f10.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????? ???????????? ??????</div>
                      </a>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li>
                      <a
                        href
                        onClick={(e) =>
                          navigate("/detail/22", { state: { main: "Y" } })
                        }
                      >
                        <div className="thumb">
                          <img
                            src="/uploaded/product/22/large_bd7431cf31f2d264146c1b0460ebbc6c0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tit">?????? ??????????????????</div>
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
    </>
  );
};

export default MainContent;
