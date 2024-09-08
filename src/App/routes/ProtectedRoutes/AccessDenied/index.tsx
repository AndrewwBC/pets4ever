import { Container } from "./styles";

const AccessDenied = () => {
  return (
    <Container>
      <div>
        <h1>Acesso Negado</h1>
        <p>Você não tem permissão para acessar esta página.</p>
      </div>
    </Container>
  );
};

export default AccessDenied;
