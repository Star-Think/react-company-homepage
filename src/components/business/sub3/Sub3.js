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

const Sub3 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `SATIS 항균 불연패널 | (주)별생각`;
  }, []);
  return (
    <>
      <div className="doc-cnt">
        <div className="blt-tit">제품특징</div>
        <div className="contain">
          <div className="feature-zone">
            <div className="feature-tit">
              <h3>제품규격</h3>
            </div>
            <div className="img-cnt">
              <div className="thumb">
                <img src="/images/sub/feature3_01.jpg" alt="" />
              </div>
            </div>
            <div className="table-wrap narrow">
              <table className="table01">
                <colgroup>
                  <col width="33.3333%" span="3" />
                </colgroup>
                <thead>
                  <tr>
                    <th>가로</th>
                    <th>세로</th>
                    <th>두께</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2450</td>
                    <td rowspan="2">1300</td>
                    <td rowspan="2">3~12</td>
                  </tr>
                  <tr>
                    <td>4900</td>
                  </tr>
                </tbody>
              </table>
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
                          <img src="/images/sub/feature3_p01.jpg" alt="" />
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
                          <img src="/images/sub/feature3_p02.jpg" alt="" />
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
                          <img src="/images/sub/feature3_p03.jpg" alt="" />
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
                          <img src="/images/sub/feature3_p01.jpg" alt="" />
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
                          <img src="/images/sub/feature3_p02.jpg" alt="" />
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
                          <img src="/images/sub/feature3_p03.jpg" alt="" />
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
                  <img src="/images/sub/feature3_p01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature3_p02.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature3_p03.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature3_p01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature3_p02.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/sub/feature3_p03.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub3;
