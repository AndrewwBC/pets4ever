import { Link, Outlet } from "react-router-dom";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <Link to="/">
            <h1>Pets4Ever</h1>
          </Link>
          <nav>
            <menu className="menuItems gradient-border">
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
              <li>
                <Link to="/login">Acesso</Link>
              </li>
            </menu>
          </nav>
        </Content>
      </Container>
      <Outlet />
    </>
  );
}

export default Header;
