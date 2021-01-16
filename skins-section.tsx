import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Controller, EffectFade, Thumbs } from "swiper";

import { SkinSection } from "../../styles/components/style";

import Qiyana from "../../assets/images/Qiyana.jpg";
import Liyue from "../../assets/images/Liyue.jpg";
import Thunder from "../../assets/images/Thunder.jpg";
import Cancelled from "../../assets/images/CancelledProject.jpg";

import SectionTitle from "../section-title";
import CarouselItem from "../carousel-item";
import { useState } from "react";

SwiperCore.use([EffectFade, Thumbs, Controller, Autoplay]);

export default function SkinsSection() {
  const [thumbSwiper, setThumbsSwiper] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const swipers = [
    {
      title: "Liyue - concept",
      src: Liyue,
    },
    {
      title: "Dark Cosmic Qiyana - concept",
      src: Qiyana,
    },
    {
      title: "Thunder Boy - concept ",
      src: Thunder,
      contain: true,
    },
    {
      title: "Thunder Rought",
      src: Cancelled,
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
                <span className="small-text">
                  Full concept on my artStation
                </span>
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
                      <SwiperSlide key={index}>
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
                  autoplay
                  thumbs={{ swiper: thumbSwiper }}
                  controller={{ control: thumbSwiper }}
                  data-swiper-autoplay="2000"
                  onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex)}
                >
                  {swipers.map((swiperImage, index) => (
                    <SwiperSlide
                      key={index}
                      className="slide-show-item-image"
                      style={{
                        backgroundColor: swiperImage?.contain
                          ? "#343434"
                          : null,
                      }}
                    >
                      <img
                        src={swiperImage.src}
                        style={{
                          objectFit: swiperImage?.contain ? "contain" : "cover",
                        }}
                      />
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
