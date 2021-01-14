import SkillBorder from "./skills-border";

import { motion } from "framer-motion";

const skillVariant = {
  selected: {
    translateY: 0
  },
  notSelected: {
    translateY: 15
  }
}

export default function ButtonHabilities(props) {
  return (
    <div>
      <span className="option-icon">
        <motion.span whileHover={{ translateY: 15}} variants={skillVariant} animate={{ selectedSkill ? "selected" : 'notSelected' }}
          className="option-icon-content"
        >
          <img src={props.src} />
        </motion.span>
        <span className="option-icon-border">
          <div className="container">
            <SkillBorder />
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
