import SkillBorder from "./skills-border";

import { motion } from "framer-motion";

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

export default function ButtonHabilities(props) {
  return (
    <div>
      <span className="option-icon">
        <motion.span
          whileHover={props?.skillSelected ? null : "hovered"}
          variants={skillVariant}
          animate={props?.skillSelected ? "selected" : "notSelected"}
          className="option-icon-content"
        >
          <img src={props.src} />
        </motion.span>
        <span className="option-icon-border" style={{ display: props?.skillSelected ? "block" : "none"}}>
          <div className="container">
            <SkillBorder skillSelected={props.skillSelected}/>
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
