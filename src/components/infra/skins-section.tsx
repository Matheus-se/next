import { SkinSection } from "../../styles/components/style";

import Zoe from "../../assets/images/Zoe.jpg";
import SectionTitle from "../section-title";
import CarouselItem from "../carousel-item";

export default function SkinsSection() {
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
                  <div className="swiper-container">
                    <div
                      className="swiper-wrapper"
                      style={{ transform: "translate3d(0px, 516px, 0px)" }}
                    >
                      <CarouselItem title="Akali" active={true} src={Zoe} />
                      <CarouselItem
                        title="Akali projeto"
                        src="https://www.mobafire.com/images/champion/skins/landscape/akali-project.jpg"
                      />
                      <CarouselItem
                        title="Akali all-out"
                        src="https://preview.redd.it/xssoqetspws51.jpg?width=4096&format=pjpg&auto=webp&s=87541e5e3c61a76f3e4d15d89b898dd4752318b7"
                      />
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="image-section">
              <div className="slide-show">
                <div className="slide-show-item-image">
                  <img src={Zoe} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkinSection>
  );
}
