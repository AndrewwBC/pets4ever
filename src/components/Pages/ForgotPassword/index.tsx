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

  async function sendEmailToUser(event: FormEvent) {
    event.preventDefault();

    try {
      const request = await axios.post("http://localhost:3001/forgotpassword", {
        email: email,
      });

      const response = request.data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Content>
        <span>Problemas com o Login?</span>

        <p>Insira o seu email para que possamos redefinir a sua senha.</p>

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
