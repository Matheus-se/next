import {
  BackgroundContainer,
  BackgroundImageContainer,
  BackgroundImage,
} from "../../styles/components/style";

import Zoe from "../../assets/images/Zoe.jpg";
import SectionTitle from "../section-title";

export default function BackgroundHeader() {
  return (
    <div className="p-0">
      <SectionTitle titleName="overview" />
      <BackgroundContainer>
        <BackgroundImageContainer>
          <BackgroundImage src={Zoe} />
        </BackgroundImageContainer>
      </BackgroundContainer>
    </div>
  );
}
