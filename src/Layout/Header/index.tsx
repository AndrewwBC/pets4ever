import { Link, Outlet } from "react-router-dom";
import {
  Container,
  Content,
  HandleMenuMobileContainer,
  ToggleButton,
} from "./styles";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <Link to="/">
            <h1>Pets4Ever</h1>
          </Link>
          <nav className="deskMenu">
            <menu className="menuItems gradient-border">
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
              <li>
                <Link to="/register">Registre-se</Link>
              </li>
            </menu>
          </nav>
          <HandleMenuMobileContainer>
            <ToggleButton onClick={() => setMenuMobile(!menuMobile)}>
              <span>Toggle</span>
            </ToggleButton>
            {menuMobile && <MobileMenu setMenuMobile={setMenuMobile} />}
          </HandleMenuMobileContainer>
        </Content>
      </Container>
      <Outlet />
    </>
  );
}

export default Header;
