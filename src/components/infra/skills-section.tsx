import { useState } from "react";

import { HabilitiesSection } from "../../styles/components/style";

import P from "../../assets/images/P.png";
import Q from "../../assets/images/Q.png";
import W from "../../assets/images/W.png";
import E from "../../assets/images/E.png";
import R from "../../assets/images/R.png";

import ButtonHabilities from "../button-habilities";
import SectionTitle from "../section-title";
import BaseLineKnob from "../baseline-knob";
import Role from "../role";

export default function SkillsSection() {
  let [bulletPosition, setBulletPosition] = useState("10%");
  let [optionHabilities, setoptionHabilities] = useState({
    text:
      "While working on a project, Lucas can easily learn new subjets and techniques if needed. When he's out of combat, Lucas is always leaning new ways to imrpove his work as well.",
    name: "passive",
    title: "Quick Learning",
    presentation:
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.mp4",
    poster:
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.jpg",
  });

  const buttonHabilities = [
    {
      skill: P,
      position: "10%",
      text:
        "While working on a project, Lucas can easily learn new subjets and techniques if needed. When he's out of combat, Lucas is always leaning new ways to imrpove his work as well.",
      name: "passive",
      title: "Quick Learning",
      presentation:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.mp4",
      poster:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.jpg",
    },
    {
      skill: Q,
      position: "30%",
      text:
        "Lucas loves experimenting. when active, Lucas can sketch and produce a vast amount of ideas and concepts.",
      name: "Q",
      title: "Creative Explosion!",
      presentation:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.mp4",
      poster:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.jpg",
    },
    {
      skill: W,
      position: "50%",
      text:
        "Working on a team is always better. When next to one or multiple ally champions, Lucas can smoothly improve and execute his task, helping and working with his friends and coworkers, making him a great teammate!",
      name: "W",
      title: "Together is better",
      presentation:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.mp4",
      poster:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.jpg",
    },
    {
      skill: E,
      position: "70%",
      text:
        "Motivated and dedicated. Lucas can always come up with a solution and finish his job. never lose a game with him on your side!",
      name: "E",
      title: "Hands on!",
      presentation:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.mp4",
      poster:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.jpg",
    },
    {
      skill: R,
      position: "90%",
      text:
        "Lucas ultimate ability is always active. Lucas is extremely passionate on what he does and has a profound admiration for riot and the content provided by the company. with him by your side, you will not only be working with a motivated intern, but a intern who really cares about the company and his work. i'll do my best.",
      name: "R",
      title: "Dream job",
      presentation:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.mp4",
      poster:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.jpg",
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
                    <h2>abilities</h2>
                    {buttonHabilities.map((habilitiesOptions, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setBulletPosition(habilitiesOptions.position);
                          setoptionHabilities({
                            text: habilitiesOptions.text,
                            name: habilitiesOptions.name,
                            title: habilitiesOptions.title,
                            presentation: habilitiesOptions.presentation,
                            poster: habilitiesOptions.poster,
                          });
                        }}
                      >
                        <ButtonHabilities src={habilitiesOptions.skill} />
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
                  <div className="video-container">
                    <div className="video-wrapper">
                      <div className="wrapper">
                        <video
                          preload="metadata"
                          loop
                          autoPlay
                          muted
                          src={optionHabilities.presentation}
                          poster={optionHabilities.poster}
                        />
                      </div>
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
