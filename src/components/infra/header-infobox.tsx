import Link from "next/link";

import { Legend, FieldSet, Dificulty } from "../../styles/components/style";

import Role from "../role";
import { BoxBottomDecoration } from "../../styles/components/style";
import { Container } from "react-bootstrap";

export default function HeaderInfoBox() {
  return (
    <Container className="p-0">
      <FieldSet>
        <Legend className="title">
          The concept art intern<br></br>
          <span>Lucas</span>
        </Legend>
        <div className="row text-light fieldset-content">
          <div className="linha-vertical"></div>
          <div className="col-6 d-flex flex-row justify-content-around padded-box">
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
          </div>
          <div className="col-6 read-more-box padded-box">
            Born in a country without much opportunity for the boy's dreams,
            Lucas trained all his life for a chance at riot, his dream place.
            Now, after years of preparation, he's at the end of his journey.
            Will he succeed? all he needs is a chance...
          </div>
        </div>
        <BoxBottomDecoration>
          <p>Artist Contact</p>
          <ul>
            <li>
              <Link href="https://www.artstation.com/lucasandrew">
                <a>Artstation.com</a>
              </Link>
            </li>
            <li>
              <a href="#"></a>lukas29pr@gmail.com
            </li>
            <li>
              <Link href="https://api.whatsapp.com/send?phone=5544999496552&text=Talk%20with%20me!">
                <a>WHATSAPP:+55 44 99949-6552</a>
              </Link>
            </li>
          </ul>
        </BoxBottomDecoration>
      </FieldSet>
    </Container>
  );
}
