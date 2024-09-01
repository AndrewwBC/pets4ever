import { Container, Content, Intro } from "../noAuthStyle";

import contactImage from "../../../assets/images/contact.jpg";
import { PurpleSpan } from "./styles";

export default function Contact() {
  return (
    <Container>
      <Content>
        <div>
          <img src={contactImage} alt="cachorro e gato" />
        </div>
        <Intro>
          <div>
            <h1>
              Possui alguma <PurpleSpan>dúvida</PurpleSpan>,
              <PurpleSpan> crítica</PurpleSpan> ou
              <PurpleSpan> sugestão</PurpleSpan>? Fale com a gente!
            </h1>
          </div>
        </Intro>
      </Content>
    </Container>
  );
}
