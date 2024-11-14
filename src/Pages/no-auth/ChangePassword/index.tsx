import PasswordUpdate from "../../auth/UserConfig/PasswordUpdate";
import { Container } from "./styles";

export default function ChangePassword() {
  return (
    <Container>
      <h1>Redefinir Senha</h1>
      <PasswordUpdate hasSession={false} />
    </Container>
  );
}
