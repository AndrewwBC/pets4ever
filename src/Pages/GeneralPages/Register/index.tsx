import { AuthContainer, Container, Content } from "./styles";
import homeImage from "../../../assets/images/dogHome.jpg";
import { FcGoogle } from "react-icons/fc";

import Form from "./components/Form";

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
          <AuthContainer>
            <div className="loginWithGoogle">
              <FcGoogle size={22} />
              <span>Registre-se com Google</span>
            </div>
          </AuthContainer>
          <Form />
        </div>
      </Content>
    </Container>
  );
}
