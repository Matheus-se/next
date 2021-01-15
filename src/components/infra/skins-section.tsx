import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller, EffectFade, Thumbs } from "swiper";

import { SkinSection } from "../../styles/components/style";

import Zoe from "../../assets/images/Zoe.jpg";
import Akali from "../../assets/images/akali.jpg";

import SectionTitle from "../section-title";
import CarouselItem from "../carousel-item";
import { useEffect, useState } from "react";

SwiperCore.use([EffectFade, Thumbs, Controller]);

export default function SkinsSection() {
  const [thumbSwiper, setThumbsSwiper] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const swipers = [
    {
      title: "Akali projeto",
      src:
        "https://www.mobafire.com/images/champion/skins/landscape/akali-project.jpg",
    },
    {
      title: "Akali all-out",
      src: Zoe,
    },
    {
      title: "Akali all-out",
      src:
        "https://preview.redd.it/xssoqetspws51.jpg?width=4096&format=pjpg&auto=webp&s=87541e5e3c61a76f3e4d15d89b898dd4752318b7",
    },
  ];

  return (
    <SkinSection>
      <div>
        <div className="content">
          <SectionTitle titleName="Projects" style={{ color: "black" }} />
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
                    {swipers.map((swiperItem, index) => (
                      <SwiperSlide>
                        <CarouselItem
                          isActive={sliderIndex == index}
                          title={swiperItem.title}
                          src={swiperItem.src}
                        />
                      </SwiperSlide>
                    ))}
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
                  onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex)}
                >
                  {swipers.map((swiperImage) => (
                    <SwiperSlide className="slide-show-item-image">
                      <img src={swiperImage.src} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </main>
            </div>
          </div>
        </div>
      </div>
    </SkinSection>
  );
}
