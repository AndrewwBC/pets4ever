import { FormEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalStorage";

import FormGroup from "../../FormGroup";
import { Container, Content, Form } from "./styles";
import { Input } from "../../input";
import { Button } from "../../Button";
import { isEmailValid } from "../../../utils/isEmailValid";
import axios from "axios";

import { motion, AnimatePresence } from "framer-motion";
import { Toast } from "../../Toast";

export default function ForgotPassword() {
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  console.log(error);

  function validarEmail(event: FormEvent) {
    event.preventDefault();

    isEmailValid(event.target.value);
    console.log(event.target.value);
  }

  function sendEmailToUser(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Container>
      <Content>
        <h1>Pets4Ever</h1>

        <Form onSubmit={sendEmailToUser}>
          <FormGroup error={error}>
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={(event) => validarEmail(event)}
              placeholder="Email ou nome de usuário."
            />
          </FormGroup>

          <Button size={"low"} label="Enviar" />
        </Form>
      </Content>
      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </Container>
  );
}
