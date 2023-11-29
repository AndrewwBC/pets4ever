import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

export default function () {
  return (
    <Container>
      <Content>
        <a href="./">
          <h1>Pets4Ever</h1>
        </a>

        <nav>
          <ul className="menuItems">
            <li>
              <a href="./about">Sobre</a>
            </li>
            <li>Contato</li>
            <li>Acesso</li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
