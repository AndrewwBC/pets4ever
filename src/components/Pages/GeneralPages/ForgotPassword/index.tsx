import { ChangeEvent, FormEvent, useState } from "react";

import FormGroup from "../../../FormGroup";
import { Container, Content, Form } from "./styles";
import { Input } from "../../../input";
import { Button } from "../../../Button";
import { isEmailValid } from "../../../../utils/isEmailValid";
import axios from "axios";

import { Toast } from "../../../Toast";

export default function ForgotPassword() {
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  console.log(error);

  function handleEmailBlur(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    if (email.length < 1) {
      return;
    }

    if (!isEmailValid(event.target.value)) setError("Email inválido");

    if (isEmailValid(event.target.value)) setError("");
    console.log(event.target.value);
  }

  async function sendEmailToUser(event: FormEvent) {
    event.preventDefault();

    try {
      const request = await axios.post(
        "http://localhost:3001/forgotpassword",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const response = request.data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Content>
        <p>Problemas com o Login?</p>

        <p>Insira o seu email para que possamos redefinir a sua senha.</p>

        <Form onSubmit={sendEmailToUser}>
          <FormGroup error={error}>
            <Input
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              onBlur={(event) => handleEmailBlur(event)}
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
