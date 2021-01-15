import Link from "next/link";

import { Legend, FieldSet, Dificulty } from "../../styles/components/style";

import Role from "../role";
import { BoxBottomDecoration } from "../../styles/components/style";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";

const opacityVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeaderInfoBox() {
  const [info, setInfo] = useState(false);
  const [contactSite, setContactSite] = useState(false);
  const [contactEmail, setContactEmail] = useState(false);
  const [contactPhone, setContactPhone] = useState(false);

  return (
    <Container className="p-0">
      <FieldSet>
        <Legend className="title">
          <motion.span
            variants={opacityVariant}
            initial="initial"
            animate="visible"
          >
            The concept art intern
          </motion.span>
          <br></br>
          <motion.span
            className="name"
            variants={opacityVariant}
            initial="initial"
            animate="visible"
          >
            Lucas
          </motion.span>
        </Legend>
        <div className="row text-light fieldset-content">
          <div className="linha-vertical"></div>
          <motion.div
            variants={opacityVariant}
            initial="initial"
            animate="visible"
            onAnimationComplete={() => setInfo(true)}
            className="col-6 d-flex flex-row justify-content-around padded-box"
          >
            <div className="text-center left-box-decoration">
              <Role role={true} />
              <p className="labels-box m-0">
                Role<br></br>
                <span className="yellow-text">Concept artist</span>
              </p>
            </div>
            <div className="labels-box text-center left-box-decoration">
              <Dificulty>
                <span>
                  <span className="reactangles-container">
                    <span className="rectangle"></span>
                    <span className="rectangle"></span>
                    <span className="rectangle"></span>
                  </span>
                </span>
              </Dificulty>
              <p className="m-0">
                Skills<br></br>
                <span className="yellow-text">Moderate</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={opacityVariant}
            initial="initial"
            animate={info ? "visible" : "initial"}
            className="col-6 read-more-box padded-box"
          >
            Born in a country without much opportunity for the boy's dreams,
            Lucas trained all his life for a chance at riot, his dream place.
            Now, after years of preparation, he's at the end of his journey.
            Will he succeed? all he needs is a chance...
          </motion.div>
        </div>
        <BoxBottomDecoration>
          <motion.p
            variants={opacityVariant}
            initial="initial"
            animate="visible"
            onAnimationComplete={() => setContactSite(true)}
          >
            Artist Contact
          </motion.p>
          <ul>
            <li>
              <Link href="https://www.artstation.com/lucasandrew">
                <a>
                  <motion.span
                    variants={opacityVariant}
                    initial="initial"
                    animate={contactSite ? "visible" : null}
                    onAnimationComplete={() => setContactEmail(true)}
                  >
                    Artstation.com
                  </motion.span>
                </a>
              </Link>
            </li>
            <li>
              <motion.a
                variants={opacityVariant}
                initial="initial"
                animate={contactEmail ? "visible" : null}
                onAnimationComplete={() => setContactPhone(true)}
              >
                lukas29pr@gmail.com
              </motion.a>
            </li>
            <li>
              <Link href="https://api.whatsapp.com/send?phone=5544999496552&text=Talk%20with%20me!">
                <a>
                  <motion.span
                    variants={opacityVariant}
                    initial="initial"
                    animate={contactPhone ? "visible" : null}
                  >
                    WHATSAPP:+55 44 99949-6552
                  </motion.span>
                </a>
              </Link>
            </li>
          </ul>
        </BoxBottomDecoration>
      </FieldSet>
    </Container>
  );
}
