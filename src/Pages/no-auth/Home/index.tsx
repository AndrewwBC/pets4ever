import { ButtonContainer, Paragraph } from "./styles";

import homeImage from "../../../assets/images/dogHome.jpg";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import { Container, Content, Intro } from "../noAuthStyle";

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <div>
            <img src={homeImage} alt="cachorro e gato" />
          </div>
          <Intro>
            <div>
              <div>
                <h1 className="webTitle">
                  A Pets4Ever reúne a diversão das redes sociais ao amor aos
                  Pets.
                </h1>

                <h1 className="mobTitle">Pets4Ever</h1>
              </div>
              <div>
                <Paragraph>
                  Compartilhe momentos especiais com o seu pet, encontre
                  companhias de passeio, cuidadores, veterinários e muito mais.
                </Paragraph>
              </div>
            </div>

            <ButtonContainer>
              <Link to="/login">
                <Button size="medium" label="LOGIN" />
              </Link>
            </ButtonContainer>
          </Intro>
        </Content>
      </Container>
    </>
  );
}
