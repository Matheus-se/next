import { motion } from "framer-motion";

const pathVariants = {
  initial: {
    pathLength: 0,
  },

  visible: {
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

export default function BorderButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="435"
      height="100"
      viewBox="0 0 435 100"
      fill="none"
      stroke="#c1c1c1"
      strokeWidth="0.5px"
    >
      <motion.path
        variants={pathVariants}
        d="M0,4H416l19,19V92H0"
        initial="initial"
        animate="visible"
      />
    </svg>
  );
}
