import { ArrowContainer, SectionText, TextContainer } from "./styles";
import { Container, Content, Intro } from "../noAuthStyle";

import aboutImage from "../../../assets/images/catAbout.jpg";

function handleUserClick() {
  window.scroll({
    top: 100000,
    behavior: "smooth",
  });
}

export default function About() {
  return (
    <Container>
      <Content>
        <div>
          <img src={aboutImage} alt="cachorro e gato" />
        </div>
        <Intro>
          <TextContainer>
            <h1>
              Uma rede social com a temática voltada a
              <span> animais domésticos</span>.
            </h1>
          </TextContainer>

          <ArrowContainer onClick={handleUserClick}>
            <div id="arrowAnim">
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </ArrowContainer>
        </Intro>
        <SectionText>
          <div className="motivation">
            <h1>MOTIVAÇÕES</h1>
          </div>
          <div className="listContainer">
            <ul>
              <li>
                Compartilhar informações úteis e confiáveis sobre cuidados com
                animais de estimação.
              </li>
              <li>
                Inspirar amor e dedicação pelos animais, promovendo a adoção
                responsável.
              </li>
              <li>
                Criar uma comunidade de amantes de animais para compartilhar
                experiências e conhecimentos.
              </li>
            </ul>
          </div>
        </SectionText>
      </Content>
    </Container>
  );
}
