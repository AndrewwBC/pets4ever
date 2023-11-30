import { ArrowContainer, Container, Content, Intro } from "./styles";

import homeImage from "../../../assets/images/catAbout.jpg";

import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Container>
            <Content>
              <div>
                <img src={homeImage} alt="cachorro e gato" />
              </div>
              <Intro>
                <div>
                  <h1>
                    Leia abaixo para mais{" "}
                    <span>informações mudar header link</span>!
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
