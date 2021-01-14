import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller, EffectFade, Thumbs } from "swiper";

import { SkinSection } from "../../styles/components/style";

import Zoe from "../../assets/images/Zoe.jpg";
import Akali from "../../assets/images/akali.jpg";

import SectionTitle from "../section-title";
import CarouselItem from "../carousel-item";
import { useState } from "react";

SwiperCore.use([EffectFade, Thumbs, Controller]);

export default function SkinsSection() {
  const [thumbSwiper, setThumbsSwiper] = useState(null);

  return (
    <SkinSection>
      <div>
        <div className="content">
          <SectionTitle
            titleName="Projects"
            style={{ color: "black" }}
          />
          <div className="display-container">
            <div className="slideshow-area">
              <h2>
                Projects<br></br>
              </h2>
              <div className="carrousel-wrapper">
                <ul>
                  <Swiper
                    className="swiper-container"
                    id="thumbs"
                    direction="vertical"
                    slidesPerView="auto"
                    speed={500}
                    centeredSlides={true}
                    onSwiper={setThumbsSwiper}
                  >
                    <SwiperSlide>
                      <CarouselItem title="Akali" active={true} src={Zoe} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CarouselItem
                        title="Akali projeto"
                        src="https://www.mobafire.com/images/champion/skins/landscape/akali-project.jpg"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CarouselItem
                        title="Akali all-out"
                        src="https://preview.redd.it/xssoqetspws51.jpg?width=4096&format=pjpg&auto=webp&s=87541e5e3c61a76f3e4d15d89b898dd4752318b7"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CarouselItem
                        title="Akali all-out"
                        src="https://preview.redd.it/xssoqetspws51.jpg?width=4096&format=pjpg&auto=webp&s=87541e5e3c61a76f3e4d15d89b898dd4752318b7"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CarouselItem
                        title="Akali all-out"
                        src="https://preview.redd.it/xssoqetspws51.jpg?width=4096&format=pjpg&auto=webp&s=87541e5e3c61a76f3e4d15d89b898dd4752318b7"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <CarouselItem
                        title="Akali all-out"
                        src="https://preview.redd.it/xssoqetspws51.jpg?width=4096&format=pjpg&auto=webp&s=87541e5e3c61a76f3e4d15d89b898dd4752318b7"
                      />
                    </SwiperSlide>
                  </Swiper>
                </ul>
              </div>
            </div>
            <div className="image-section">
              <main>
                <Swiper
                  className="slide-show"
                  effect="fade"
                  thumbs={{ swiper: thumbSwiper }}
                  controller={{ control: thumbSwiper }}
                >
                  <SwiperSlide className="slide-show-item-image">
                    <img src={Zoe} />
                  </SwiperSlide>
                  <SwiperSlide className="slide-show-item-image">
                    <img src={Akali} />
                  </SwiperSlide>
                  <SwiperSlide className="slide-show-item-image">
                    <img src={Zoe} />
                  </SwiperSlide>
                  <SwiperSlide className="slide-show-item-image">
                    <img src={Akali} />
                  </SwiperSlide>
                  <SwiperSlide className="slide-show-item-image">
                    <img src={Zoe} />
                  </SwiperSlide>
                  <SwiperSlide className="slide-show-item-image">
                    <img src={Akali} />
                  </SwiperSlide>
                </Swiper>
              </main>
            </div>
          </div>
        </div>
      </div>
    </SkinSection>
  );
}
