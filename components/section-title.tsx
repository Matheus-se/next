import { motion } from "framer-motion";

import { SectionTitleContainer } from "../styles/components/style";

const titleVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function SectionTitle(props) {
  return (
    <SectionTitleContainer
      as={motion.div}
      variants={titleVariant}
      initial="initial"
      animate="visible"
      style={props?.style}
    >
      <div>
        <div className="title" style={props?.style}>
          {props.titleName}
        </div>
      </div>
    </SectionTitleContainer>
  );
}
