import { Container, Content, Intro } from "./styles";

import contactImage from "../../../assets/images/contact.jpg";

import { motion, AnimatePresence } from "framer-motion";

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
        </motion.div>
      </AnimatePresence>
    </>
  );
}
