import { ChangeEvent, FormEvent, useState } from "react";

import FormGroup from "../../../components/FormGroup";
import { Container, Content, Form } from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/Button";
import { isEmailValid } from "../../../utils/isEmailValid";

import { Toast } from "../../../components/Toast";
import EMAIL_API from "../../../api/email/EMAIL_API";

export default function ForgotPassword() {
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleEmailBlur(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    if (email.length < 1) {
      return;
    }

    if (!isEmailValid(event.target.value)) setError("Email inválido");

    if (isEmailValid(event.target.value)) setError("");
  }

  async function sendEmailToUser(event: FormEvent) {
    event.preventDefault();

    try {
      const request = await EMAIL_API.forgotPassword(email);
      return request.data;
    } catch (error) {}
  }

  return (
    <Container>
      <Content>
        <h1>Problemas com o Login?</h1>

        <p>Insira o seu email para redefinir a sua senha.</p>

        <Form onSubmit={sendEmailToUser}>
          <FormGroup error={error}>
            <Input
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              onBlur={(event) => handleEmailBlur(event)}
              placeholder="Insira o seu email"
            />
          </FormGroup>

          <Button size={"low"} label="Enviar" />
        </Form>
      </Content>
      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </Container>
  );
}
