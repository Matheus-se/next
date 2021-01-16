import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { HeaderSection } from "../styles/components/style";

import HeaderDisplay from "../components/infra/header-display";
import BackgroundHeader from "../components/infra/background-header";
import HeaderInfoBox from "../components/infra/header-infobox";
import ScrollIndicator from "../components/scroll-indicator";
import SkinsSection from "../components/infra/skins-section";
import SkillsSection from "../components/infra/skills-section";

export default function Home(): JSX.Element {
  return (
    <div className="p-0 content-container">
      <HeaderSection className="header-section-container">
        <BackgroundHeader />
        <HeaderDisplay />
        <HeaderInfoBox />
        <ScrollIndicator />
      </HeaderSection>
      <SkillsSection />
      <SkinsSection />
    </div>
  );
}
