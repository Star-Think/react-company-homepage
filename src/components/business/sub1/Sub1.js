import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const Sub1 = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `내진 준불연 단열일체형 패널 | (주)별생각`;
  }, []);
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">제품특징</div>
        <div className="contain">
          <div className="feature-zone">
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
              autoHeight={true}
            >
              <SwiperSlide>
                <>
                  <div className="feature-tit">
                    <div className="items">
                      <div className="item">
                        <h3>고성능 외단열 적용으로 내부공간 절약</h3>
                        <p>
                          고성능 단열재 경질폴리우레탄 사용으로 스티로폼 2배
                          성능의 단열재
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature1_1_01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="feature-tit">
                    <div className="items">
                      <div className="item">
                        <h3>내진성능 확보</h3>
                        <p>
                          경량화, 계단식 결합, 발포 일체형 제작으로 진동영향을
                          저감시켜 외장재 탈락 방지
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature1_1_02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="feature-tit">
                    <div className="items">
                      <div className="item">
                        <h3>준불연 인증의 내화성능 확보</h3>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature1_1_03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="feature-tit">
                    <div className="items">
                      <div className="item">
                        <h3>Light & Easy Installation</h3>
                        <p>단열+외장 공종 일원화 및 공기단축</p>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature1_1_04.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="feature-tit">
                    <div className="items">
                      <div className="item">
                        <h3>Quick Installation</h3>
                        <p>단열+외장 공종 일원화 및 공기단축</p>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature1_1_05.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub1;
