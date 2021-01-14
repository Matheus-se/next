import { motion } from "framer-motion";
import { useState } from "react";

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

export default function PresentationBorder() {
  const [teste, setTeste] = useState(false);

  setTimeout(() => {
    setTeste(true);
  }, 500);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="753"
      height="466"
      viewBox="0 0 753 466"
    >
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate={teste ? "visible" : null}
        d="M0,0V466H753V107L646,0H0Z"
      />
    </svg>
  );
}
