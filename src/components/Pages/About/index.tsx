import { ArrowContainer, Container, Content, Intro } from "./styles";

import aboutImage from "../../../assets/images/catAbout.jpg";

import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
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
                  <h1>
                    Leia abaixo para mais <span>informações</span>!
                  </h1>
                </div>

                <ArrowContainer>
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
            </Content>
          </Container>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
