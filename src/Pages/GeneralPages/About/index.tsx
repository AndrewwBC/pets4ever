import {
  ArrowContainer,
  Container,
  Content,
  Intro,
  SectionText,
} from "./styles";

import aboutImage from "../../../assets/images/catAbout.jpg";

import { motion, AnimatePresence } from "framer-motion";

function handleUserClick() {
  window.scroll({
    top: 100000,
    behavior: "smooth",
  });
}

export default function About() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="home"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
        >
          <Container>
            <Content>
              <div>
                <img src={aboutImage} alt="cachorro e gato" />
              </div>
              <Intro>
                <div>
                  <p>
                    Leia abaixo para mais <span>informações</span>!
                  </p>
                </div>

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
                      Compartilhar informações úteis e confiáveis sobre cuidados
                      com animais de estimação.
                    </li>
                    <li>
                      Inspirar amor e dedicação pelos animais, promovendo a
                      adoção responsável.
                    </li>
                    <li>
                      Criar uma comunidade de amantes de animais para
                      compartilhar experiências e conhecimentos.
                    </li>
                  </ul>
                </div>
              </SectionText>
            </Content>
          </Container>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
