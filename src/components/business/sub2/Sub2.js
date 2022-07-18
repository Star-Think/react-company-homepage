import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, {
  Navigation,
  Autoplay,
  EffectFade,
  Thumbs,
  FreeMode,
} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
const Sub2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                        <h3>제품사양</h3>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_01.jpg" alt="" />
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
                        <h3>무장애 옵션</h3>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_02.jpg" alt="" />
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
                        <h3>최고급 부자재</h3>
                      </div>
                    </div>
                  </div>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_03.jpg" alt="" />
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

      <div className="doc-cnt">
        <div className="blt-tit">제품특징</div>
        <div className="contain">
          <div className="feature-zone">
            <Swiper
              style={{ marginBottom: "30px" }}
              allowTouchMove={false}
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              spaceBetween={30}
              loop={true}
              effect={"fade"}
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Thumbs, Autoplay, EffectFade]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_p01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_p02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_p03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_p04.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_p05.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="pic">
                    <div className="items">
                      <div className="item">
                        <div className="thumb">
                          <img src="/images/sub/feature2_p06.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </SwiperSlide>
            </Swiper>
            <div className="gallery-swiper">
              <Swiper
                autoplay={{ delay: 4000, disableOnInteraction: true }}
                thumbs={{ swiper: thumbsSwiper }}
                loop={true}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="/images/sub/feature2_p01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature2_p02.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature2_p03.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature2_p04.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature2_p05.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature2_p06.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="doc-cnt">
        <div className="blt-tit">COLOR</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature2_04.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub2;
