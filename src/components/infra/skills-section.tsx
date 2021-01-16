import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { HabilitiesSection } from "../../styles/components/style";

import P from "../../assets/images/P.png";
import Q from "../../assets/images/Q.png";
import W from "../../assets/images/W.png";
import E from "../../assets/images/E.png";
import R from "../../assets/images/R.png";

import Liyue from "../../assets/images/LiyueSketch.png";
import Detective from "../../assets/images/Detective.png";
import Liyue2 from "../../assets/images/LiyueSketch2.png";
import Thunder from "../../assets/images/ThunderSketch.png";
import Liyue3 from "../../assets/images/LiyueSketch3.png";

import ButtonHabilities from "../button-habilities";
import SectionTitle from "../section-title";
import BaseLineKnob from "../baseline-knob";
import Role from "../role";
import PresentationBorder from "../presentation-border";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const imageElement = imageRef.current;

    gsap.from(element, {
      scrollTrigger: {
        trigger: ".background-icon",
        start: "top bottom",
        end: "top center",
        scrub: 0.5,
        onLeave: () => setIsOnView(true),
      },
      y: 80,
      autoAlpha: 0,
      opacity: 0,
    });

    gsap.from(imageElement, {
      scrollTrigger: {
        trigger: ".background-icon",
        start: "top bottom",
        end: "top center",
        scrub: 0.5,
      },
      y: -80,
      autoAlpha: 0,
      opacity: 0,
    });
  }, []);

  let [bulletPosition, setBulletPosition] = useState("10%");
  let [isOnView, setIsOnView] = useState(false);
  let [optionHabilities, setOptionHabilities] = useState({
    text:
      "While working on a project, Lucas can easily learn new subjets and techniques if needed. When he's out of combat, Lucas is always leaning new ways to imrpove his work as well.",
    name: "passive",
    title: "Quick Learning",
    presentation: Liyue,
  });

  const buttonHabilities = [
    {
      skill: P,
      position: "10%",
      text:
        "While working on a project, Lucas can easily learn new subjets and techniques if needed. When he's out of combat, Lucas is always leaning new ways to imrpove his work as well.",
      name: "passive",
      title: "Quick Learning",
      presentation: Liyue,
    },
    {
      skill: Q,
      position: "30%",
      text:
        "Lucas loves experimenting. when active, Lucas can sketch and produce a vast amount of ideas and concepts.",
      name: "Q",
      title: "Creative Explosion!",
      presentation: Detective,
    },
    {
      skill: W,
      position: "50%",
      text:
        "Working on a team is always better. When next to one or multiple ally champions, Lucas can smoothly improve and execute his task, helping and working with his friends and coworkers, making him a great teammate!",
      name: "W",
      title: "Together is better",
      presentation: Liyue2,
    },
    {
      skill: E,
      position: "70%",
      text:
        "Motivated and dedicated. Lucas can always come up with a solution and finish his job. never lose a game with him on your side!",
      name: "E",
      title: "Hands on!",
      presentation: Thunder,
    },
    {
      skill: R,
      position: "90%",
      text:
        "Lucas ultimate ability is always active. Lucas is extremely passionate on what he does and has a profound admiration for riot and the content provided by the company. with him by your side, you will not only be working with a motivated intern, but a intern who really cares about the company and his work. i'll do my best.",
      name: "R",
      title: "Dream job",
      presentation: Liyue3,
    },
  ];

  return (
    <HabilitiesSection>
      <div>
        <div className="content">
          <SectionTitle titleName="abilities" style={{ top: "10rem" }} />
          <div className="section-inner">
            <div className="selector-wrapper">
              <div className="wrapper">
                <div className="wrapper-inner">
                  <div className="side-fill">
                    <div className="base-line-left"></div>
                  </div>
                  <div className="option-list">
                    <h2 ref={ref}>abilities</h2>
                    {buttonHabilities.map((habilitiesOptions, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setBulletPosition(habilitiesOptions.position);
                          setOptionHabilities({
                            text: habilitiesOptions.text,
                            name: habilitiesOptions.name,
                            title: habilitiesOptions.title,
                            presentation: habilitiesOptions.presentation,
                          });
                        }}
                      >
                        <ButtonHabilities
                          src={habilitiesOptions.skill}
                          index={index}
                          skillSelected={
                            optionHabilities.text == habilitiesOptions.text
                              ? true
                              : false
                          }
                        />
                      </button>
                    ))}
                    <div className="base-line">
                      <BaseLineKnob left={bulletPosition} />
                    </div>
                    <div className="ability-info">
                      <ol>
                        <li className="is-active">
                          <h6>{optionHabilities.name}</h6>
                          <h5>{optionHabilities.title}</h5>
                          <p>{optionHabilities.text}</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="side-fill">
                    <div className="base-line-right"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="preview-wrapper">
              <div className="wrapper">
                <div className="wrapper-inner">
                  <div className="img-container">
                    <div className="img-wrapper">
                      <div className="wrapper" ref={imageRef}>
                        {buttonHabilities.map((habilitiesOptions, index) => (
                          <img
                            src={habilitiesOptions.presentation}
                            key={index}
                            style={{
                              display:
                                habilitiesOptions.presentation ==
                                optionHabilities.presentation
                                  ? "block"
                                  : "none",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="container">
                      <PresentationBorder isOnView={isOnView} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-icon">
        <Role />
      </div>
    </HabilitiesSection>
  );
}
