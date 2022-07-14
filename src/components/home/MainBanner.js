import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

const MainBanner = () => {
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

  const bannerTextChange = (swiperCore) => {
    const { activeIndex } = swiperCore;

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
  };

  return (
    <>
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
            onSlideChange={(swiperCore) => bannerTextChange(swiperCore)}
          >
            <SwiperSlide>
              <li className="item" data-swiper-parallax="-300">
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
                        건물의 에너지 소비를 절감시키는 Green Technology 개발로{" "}
                        <br />
                        자연과 자원을 보호하는 기술
                      </p>
                    </div>
                    <div ref={swiperOpacity1_2} className="box anifade2"></div>
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
                      <strong>고품질의, 안전한 친환경 제품을 만듭니다!</strong>
                    </p>
                  </div>
                </div>
              </li>{" "}
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </>
  );
};

export default MainBanner;
