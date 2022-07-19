import React, { useEffect, useState } from "react";
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

const Sub6 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `동화자연마루 에코스택 | (주)별생각`;
  }, []);
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">COLOR</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature6_02.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doc-cnt">
        <div className="blt-tit">시공사례</div>
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
                          <img src="/images/sub/feature6_p01.jpg" alt="" />
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
                          <img src="/images/sub/feature6_p02.jpg" alt="" />
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
                          <img src="/images/sub/feature6_p03.jpg" alt="" />
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
                          <img src="/images/sub/feature6_p01.jpg" alt="" />
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
                          <img src="/images/sub/feature6_p02.jpg" alt="" />
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
                          <img src="/images/sub/feature6_p03.jpg" alt="" />
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
                  <img src="/images/sub/feature6_p01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature6_p02.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature6_p03.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature6_p01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature6_p02.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature6_p03.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub6;
