import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { HeaderImage, FadeOutContainer } from "../../styles/components/style";
import { Container } from "react-bootstrap";

import Lucas from "../../assets/images/Lucas.png";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderDisplay() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.to(element, {
      scrollTrigger: {
        trigger: ".header-section-container",
        start: "top top",
        end: "center top",
        scrub: 0.5,
      },
      y: -80,
      autoAlpha: 0.6,
      opacity: 0.6,
    });
  }, []);

  return (
    <Container className="p-0 header-image-container">
      <FadeOutContainer ref={ref}>
        <HeaderImage src={Lucas} className="header-image-center" />
      </FadeOutContainer>
    </Container>
  );
}
