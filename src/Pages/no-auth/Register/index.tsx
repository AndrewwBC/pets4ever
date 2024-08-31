import { Container, Content } from "./styles";
import homeImage from "../../../assets/images/dogHome.jpg";

import Form from "./components/Form";
import GoogleAuth from "../../../components/GoogleAuth";

export function Register() {
  return (
    <Container>
      <Content>
        <div>
          <img src={homeImage} alt="cachorro e gato" />
        </div>
        <div className="formAndText">
          <div className="text">
            <h1>Crie sua conta</h1>

            <p>Apenas quatro informações para iniciar.</p>
          </div>
          <GoogleAuth />
          <Form />
        </div>
      </Content>
    </Container>
  );
}
