import { motion } from "framer-motion";

import {
  BackgroundContainer,
  BackgroundImageContainer,
  BackgroundImage,
} from "../../styles/components/style";

import Zoe from "../../assets/images/Zoe.jpg";
import SectionTitle from "../section-title";

const backgroundVariants = {
  initialContainer: {
    opacity: 0,
  },
  visibleContainer: {
    opacity: 0.3,
    transition: {
      duration: 1,
    },
  },
};

export default function BackgroundHeader() {
  return (
    <div className="p-0">
      <SectionTitle titleName="overview" />
      <BackgroundContainer
        as={motion.div}
        variants={backgroundVariants}
        initial="initialContainer"
        animate="visibleContainer"
      >
        <BackgroundImageContainer>
          <BackgroundImage src={Zoe} />
        </BackgroundImageContainer>
      </BackgroundContainer>
    </div>
  );
}
