import { HeaderImage, FadeOutContainer } from "../../styles/components/style";
import { Container } from "react-bootstrap";

import Lucas from "../../assets/images/Zoe.jpg";

export default function HeaderDisplay() {
  return (
    <Container className="p-0">
      <FadeOutContainer>
        <HeaderImage src={Lucas} />
      </FadeOutContainer>
    </Container>
  );
}
