import { Container, Content, Intro } from "./styles";

import contactImage from "../../../assets/images/contact.jpg";

export default function About() {
  return (
    <Container>
      <Content>
        <div>
          <img src={contactImage} alt="cachorro e gato" />
        </div>
        <Intro>
          <div>
            <h1>
              Possui alguma <span>dúvida</span>, <span>crítica</span> ou
              <span> sugestão</span>? Fale com a gente!
            </h1>
          </div>
        </Intro>
      </Content>
    </Container>
  );
}
