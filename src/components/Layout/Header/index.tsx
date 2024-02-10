import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <a href="./">
          <h1>Pets4Ever</h1>
        </a>
        <nav>
          <menu className="menuItems gradient-border">
            <li>
              <a href="./about">Sobre</a>
            </li>
            <li>
              <a href="./contact">Contato</a>
            </li>
            <li>
              <a href="./login">Acesso</a>
            </li>
          </menu>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
