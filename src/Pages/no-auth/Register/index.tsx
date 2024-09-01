import { TextGoogleAndForm } from "./styles";
import { Container, Content } from "../noAuthStyle";

import Form from "./components/Form";

export function Register() {
  return (
    <Container>
      <Content>
        <TextGoogleAndForm>
          <div className="text">
            <h1>Crie sua conta</h1>

            <p>Apenas quatro informações para iniciar.</p>
          </div>

          <Form />
        </TextGoogleAndForm>
      </Content>
    </Container>
  );
}
