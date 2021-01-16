import { motion } from "framer-motion";

const pathVariants = {
  initial: {
    pathLength: 0,
  },

  visible: {
    pathLength: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function SkillBorder(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      stroke="#d0a85c"
      strokeWidth="1.5px"
    >
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate={props?.skillSelected ? "visible" : null}
        d="M0,0H48L70,22V38"
      />
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate={props?.skillSelected ? "visible" : null}
        d="M70,38V70H18"
      />
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate={props?.skillSelected ? "visible" : null}
        d="M18,70H0V0"
      />
    </svg>
  );
}
