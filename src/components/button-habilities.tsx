import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import SkillBorder from "./skills-border";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const skillVariant = {
  selected: {
    translateY: 0,
  },
  notSelected: {
    translateY: 20,
  },
  hovered: {
    translateY: 15,
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function ButtonHabilities(props) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const timeline = gsap.timeline();

    timeline
      .from(element.querySelector(".skill-icon-0"), {
        yPercent: -50,
        autoAlpha: 0,
        ease: "back",
      })
      .from(element.querySelector(".skill-icon-1"), {
        yPercent: -50,
        autoAlpha: 0,
        ease: "back",
      })
      .from(element.querySelector(".skill-icon-2"), {
        yPercent: -50,
        autoAlpha: 0,
        ease: "back",
      })
      .from(element.querySelector(".skill-icon-3"), {
        yPercent: -50,
        autoAlpha: 0,
        ease: "back",
      })
      .from(element.querySelector(".skill-icon-4"), {
        yPercent: -50,
        autoAlpha: 0,
        ease: "back",
      });

    ScrollTrigger.create({
      trigger: ".background-icon",
      animation: timeline,
      scrub: 2,
      start: "top center",
      end: "top center",
      toggleActions: "play none none none",
      once: true,
    });
  }, []);

  return (
    <div>
      <span className="option-icon" ref={ref}>
        <motion.span
          whileHover={props?.skillSelected ? null : "hovered"}
          variants={skillVariant}
          animate={props?.skillSelected ? "selected" : "notSelected"}
          className="option-icon-content"
        >
          <img src={props.src} className={`skill-icon-${props.index}`} />
        </motion.span>
        <span
          className="option-icon-border"
          style={{ display: props?.skillSelected ? "block" : "none" }}
        >
          <div className="container">
            <SkillBorder skillSelected={props.skillSelected} />
          </div>
        </span>
      </span>
      <span className="option-line"></span>
      <span className="option-bullet-container">
        <span className="bullet"></span>
      </span>
    </div>
  );
}
