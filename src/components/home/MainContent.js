import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

SwiperCore.use([Autoplay]);

const MainContent = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
                              <span className="tit">동화자연마루 에코스텍</span>
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
                    <a
                      href
                      onClick={(e) => e.preventDefault}
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
                    <div className="tit">SATIS (화장실칸막이)</div>
                    <div className="txt">
                      INEXWALL의 기술과 경험을 기반으로 High Quality 화장실
                      칸막이 시장을 선도하며, 지난 10여년간 학교 및 공공 화장실
                      문화를 개선해 왔습니다.
                    </div>
                    <a
                      href
                      onClick={(e) => e.preventDefault}
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
                    <div className="tit">SATIS 항균 불연패널(불연벽장재)</div>
                    <div className="txt">
                      주변과 조화를 이루면서 세련된 분위기를 완성하는 인테리어
                      시스템 입니다. <br />
                      석고보드의 장점과 퍼스탑의 아름다움을 결합하여 빠른
                      시공성을 보장합니다.{" "}
                    </div>
                    <a
                      href
                      onClick={(e) => e.preventDefault}
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
                    <div className="tit">PF 단열재</div>
                    <div className="txt">
                      내열성과 내구성이 우수한 열경화서 수지를 90%이상의
                      독립기포율로(Closed Cell) 발포시킨 고성능 건축용 단열재.
                    </div>
                    <a
                      href
                      onClick={(e) => e.preventDefault}
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
                      동화자연마루 스쿨 (친환경 기능성 학교용 마루)
                    </div>
                    <div className="txt">
                      뛰어난 품질과 가격, 환경친화성으로 전국 학교에서 가장
                      인기를 끌고 있는 중보행용 마루입니다.
                    </div>
                    <a
                      href
                      onClick={(e) => e.preventDefault}
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
                    <div className="tit">동화자연마루 에코스텍</div>
                    <div className="txt">
                      공간의 용도에 맞는 최상의 흡음기능과 함께 고급 인테리어
                      마감효과를 동시에 연출할 수 있는 고품격 인테리어
                      흡음판넬입니다.
                    </div>
                    <a
                      href
                      onClick={(e) => e.preventDefault}
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
              <a href onClick={(e) => e.preventDefault} className="btn-more">
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
                      <a href onClick={(e) => e.preventDefault}>
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
