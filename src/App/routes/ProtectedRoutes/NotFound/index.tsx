import { Link } from "react-router-dom";
import { Container } from "./styles";

const Error404 = () => {
  return (
    <Container>
      <div>
        <h1>Não encontrado</h1>
        <div className="content">
          <p>Esta página deve estar indisponível ou não existe.</p>
          <Link to={"/"}>Volte para o Pets4Ever</Link>
        </div>
      </div>
    </Container>
  );
};

export default Error404;
